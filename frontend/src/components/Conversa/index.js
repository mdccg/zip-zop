import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './styles';

import Texto from './../Texto';

import paleta from './../../stylesheets/paleta';

function Conversa({
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
  mensagens = {},
  fixado,
  mensagensNaoLidas
}) {
  const datas = Object.keys(mensagens);
  const ultimaData = [...datas].pop();
  const ultimaMensagem = [...mensagens[ultimaData]].pop();

  const { mensagem, recebido, visualizado } = ultimaMensagem;

  return (
    <TouchableOpacity style={styles.conversa}>
      <Image style={styles.fotoPerfil} source={{ uri: fotoPerfil }} />
      
      <View style={styles.textos}>
        <Texto traduzir={false} style={styles.apelido} negrito>
          {apelido}
        </Texto>
        
        <Texto traduzir={false} style={styles.mensagem}>
          {mensagem}
        </Texto>
      </View>

      <View style={styles.girondino}>
        <Texto style={[
          styles.dataUltimaMensagem, {
            color: mensagensNaoLidas ? paleta.peterRiver : paleta.americanRiver,
          }
          ]}>
          07:58
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

export default Conversa;