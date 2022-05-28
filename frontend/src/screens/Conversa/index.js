import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';

import UpArrow from './../../assets/icons/UpArrow';
import VideoSolid from './../../assets/icons/VideoSolid';
import PhoneSolid from './../../assets/icons/PhoneSolid';
import PaperPlaneSolid from './../../assets/icons/PaperPlaneSolid';
import ShowMoreButtonWithThreeDots from './../../assets/icons/ShowMoreButtonWithThreeDots';

import FlaticonPattern from './../../assets/images/FlaticonPattern/pattern.png';

import MensagensDiarias from './../../components/MensagensDiarias';
import Texto from './../../components/Texto';

import formatarDia from './../../functions/formatarDia';
import encurtar from './../../functions/encurtar';
import ObjectId from './../../functions/ObjectId';

import bancoMock from './../../tmp/bancoMock';

import moment from 'moment';

// FIXME criar função
import translations from './../../config/translations.json';

import * as Localization from 'expo-localization';

import i18n from 'i18n-js';

i18n.defaultLocale = 'pt-BR';
i18n.translations = translations;
i18n.locale     = Localization.locale;
i18n.fallbacks = true;

const icone = {
  width:  20,
  height: 20,

  fill: 'white'
};

function Conversa({ navigation, route, usuario = {} }) {
  const [dias, setDias] = useState({});
  
  const [vistoUltimo, setVistoUltimo] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [apelido, setApelido]     = useState('');
  const [numero, setNumero]     = useState('');
  const [online, setOnline]   = useState(false);

  const [mensagem, setMensagem] = useState('');

  function enviarMensagem() {
    let novaMensagem = {
      _id: ObjectId(),
      remetente: usuario,
      mensagem,
      envio: `${new Date().toISOString()}`,
      recebido: `${new Date().toISOString()}`,
      visualizado: ''
    };

    var hoje = formatarDia();
    let _dias = { ...dias };
    
    if(!_dias[hoje]) _dias[hoje] = [];
    
    _dias[hoje].push(novaMensagem);
    
    setDias(_dias);
    setMensagem('');
  }

  function ligar() {
    alert(`Ligando para ${apelido}...`);
  }

  function iniciarVideochamada() {
    alert(`Iniciando videochamada com ${apelido}...`);
  }

  function abrirMenu() {
    alert('Abrindo menu...');
  }

  function buscarConversa() {
    // TODO back-end aqui

    const { idConversa } = route.params;
    const { conversasMock: conversas } = bancoMock;
    const conversa = [...conversas.filter(({ _id }) => _id === idConversa)].pop();

    let { contato: configuracaoContato, mensagens } = conversa;
    let { apelido, contato } = configuracaoContato;
    let { fotoPerfil, numero, online, vistoUltimo } = contato;

    var dias = {};

    for(let mensagem of mensagens) {
      let dia = formatarDia(mensagem.envio);

      if(!dias[dia]) dias[dia] = [];

      dias[dia].push(mensagem);
    }

    var formato = 'MMM Do[,] HH[:]mm';
    
    if(i18n.locale === 'pt-br')
      formato = 'MMM DD[,] HH[:]mm';
    
    setVistoUltimo(vistoUltimo ? moment(vistoUltimo).format(formato) : '');
    
    setFotoPerfil(fotoPerfil);
    setApelido(apelido);
    setNumero(numero);
    setOnline(online);
    
    setDias(dias);
  }

  useEffect(() => {
    buscarConversa();
  }, []);

  return (
    <>
      <View style={styles.cabecalho}>
        <TouchableOpacity style={styles.btnVoltar} onPress={navigation.goBack}>
          <UpArrow {...icone} style={styles.upArrow} />
        </TouchableOpacity>

        <Image style={styles.fotoPerfil} source={{ uri: fotoPerfil || undefined }} />

        <View style={styles.textos}>
          <Texto style={styles.apelido} traduzir={false}>{encurtar(apelido || numero, 10)}</Texto>
          <Texto style={styles.status}  traduzir={false}>{online ? 'online' : vistoUltimo}</Texto>
        </View>

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={iniciarVideochamada}>
            <VideoSolid {...icone} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={ligar}>
            <PhoneSolid {...icone} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={abrirMenu}>
            <ShowMoreButtonWithThreeDots
              {...icone}
              width={16} 
              height={16} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.rodape}>
        <TextInput
          style={styles.input}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder={i18n.t('Digite uma mensagem', { defaultValue: 'Type a message' })} />
      
        <TouchableOpacity
          disabled={!mensagem}
          onPress={enviarMensagem}
          style={[styles.enviar, !mensagem ? styles.desabilitado : null]}>
          <PaperPlaneSolid {...icone} />
        </TouchableOpacity>
      </View>

      <MensagensDiarias dias={dias} usuario={usuario} />

      <Image source={FlaticonPattern} style={styles.planoFundo} />
    </>
  );
}

export default Conversa;