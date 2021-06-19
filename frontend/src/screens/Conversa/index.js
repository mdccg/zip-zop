import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import UpArrow from './../../assets/icons/UpArrow';
import FlaticonPattern from './../../assets/images/FlaticonPattern/pattern.png';

import Texto from './../../components/Texto';
import MensagensDiarias from './../../components/MensagensDiarias';

import encurtar from './../../functions/encurtar';

import bancoMock from './../../tmp/bancoMock';

import moment from 'moment';

import i18n from 'i18n-js';

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

  function buscarConversa() {
    // TODO back-end aqui

    const { idConversa } = route.params;
    const { conversasMock: conversas } = bancoMock;
    const conversa = [...conversas.filter(({ _id }) => _id === idConversa)].pop();

    let { contato: configuracaoContato, mensagens } = conversa;
    let { apelido, contato } = configuracaoContato;
    let { fotoPerfil, numero, online, vistoUltimo } = contato;

    var dias = {};

    for(const mensagem of mensagens) {
      let formato = 'MMMM Do YYYY';

      if(i18n.locale === 'pt-br') formato = 'DD [de] MMMM [de] YYYY';

      let dia = moment(mensagem.envio).format(formato);

      if(!dias[dia]) dias[dia] = [];

      // dias[dia].push(moment(mensagem.envio).format('DD/MM/YYYY HH[:]mm'));
      dias[dia].push(mensagem);
    }

    var formato = 'MMM Do[,] HH[:]mm';

    if(i18n.locale === 'pt-br') formato = 'MMM DD[,] HH[:]mm';

    setDias(dias);

    setVistoUltimo(vistoUltimo ? moment(vistoUltimo).format(formato) : '');
    setFotoPerfil(fotoPerfil);
    setApelido(apelido);
    setNumero(numero);
    setOnline(online);
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
          {/* AJUSTAR AQUI */}
          <Texto style={styles.apelido} traduzir={false}>{encurtar(apelido, 10) || numero}</Texto>
          <Texto style={styles.status}  traduzir={false}>{online ? 'online' : vistoUltimo}</Texto>
        </View>
      </View>
      
      <MensagensDiarias dias={dias} usuario={usuario} />
      
      <Image source={FlaticonPattern} style={styles.planoFundo} />
    </>
  );
}

export default Conversa;