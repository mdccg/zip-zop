import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './styles';

import CheckSolid from './../../assets/icons/CheckSolid';
import CheckDoubleSolid from './../../assets/icons/CheckDoubleSolid';

import Texto from './../Texto';

import encurtar from './../../functions/encurtar';

import paleta from './../../stylesheets/paleta';

import moment from 'moment';

const checkProps = {
  width:  10,
  height: 10,

  style: styles.check
};

function ExpositorConversa({
  _id: idConversa,
  tipo,
  contato: {
    _id: idConfiguracaoContato,
    contato: { _id: idContato, fotoPerfil, nome, recado, contato },
    apelido, 
    notificacoesMutadas,
    notificacaoPersonalizada,
    visibilidadeMidia,
    grupos 
  },
  mensagens = [],
  fixado,
  mensagensNaoLidas,
  navigation,
  usuario = {}
}) {
  const ultimaMensagem = [...mensagens].pop();

  const { remetente, mensagem, envio, recebido, visualizado } = ultimaMensagem;

  const escritor = remetente._id === usuario._id;

  function abrirConversa() {
    navigation.navigate('Conversa', { idConversa });
  }

  return (
    <TouchableOpacity style={styles.conversa} onPress={abrirConversa}>
      <Image style={styles.fotoPerfil} source={{ uri: fotoPerfil }} />
      
      <View style={styles.textos}>
        <Texto traduzir={false} style={styles.apelido} negrito>
          {encurtar(apelido, 26)}
        </Texto>
        
        <View style={styles.mensagem}>
          {escritor ? (
            visualizado ? (
              <CheckDoubleSolid
                {...checkProps}
                fill={paleta.peterRiver} />
  
            ) : recebido ? (
              <CheckDoubleSolid
                {...checkProps}
                fill={paleta.silver} />
  
            ) : (
              <CheckSolid
                {...checkProps}
                fill={paleta.silver} />
            )
          ) : null}

          <Texto traduzir={false} style={styles.textoMensagem}>
            {encurtar(mensagem, escritor ? 34 : 32)}
          </Texto>
        </View>
      </View>

      <View style={styles.girondino}>
        <Texto style={[
          styles.dataUltimaMensagem, {
            color: mensagensNaoLidas ? paleta.peterRiver : paleta.americanRiver,
          }
          ]}>
          {moment(envio).format('HH[:]mm')}
        </Texto>

        {mensagensNaoLidas ? (
          <View style={styles.mensagensNaoLidas}>
            <Texto style={styles.textoMensagensNaoLidas}>{mensagensNaoLidas}</Texto>
          </View>
        ) : <View style={{ height: 20 }} />}
      </View>
    </TouchableOpacity>
  );
}

export default ExpositorConversa;