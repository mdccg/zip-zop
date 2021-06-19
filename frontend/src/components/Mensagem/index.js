import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import Texto from './../Texto';

import moment from 'moment';

function Mensagem({ _id, remetente, mensagem, envio, recebido, visualizado, usuario }) {
  const escritor = remetente._id === usuario._id;
  
  const Balao = ({ children }) => escritor ? (
    <View style={[styles.mensagem, styles.minhaMensagem]}>
      <View style={[styles.balao, styles.meuBalao, { marginLeft: 24 }]} key={_id}>
        {children}
      </View>

      <View style={styles.meuTriangulo} />
    </View>
  ) : (
    <View style={styles.mensagem}>
      <View style={styles.triangulo} />

      <View style={[styles.balao, { marginRight: 24 }]} key={_id}>
        {children}
      </View>
    </View>
  );

  return (
    <Balao>
      <Texto cor={escritor ? 'white' : 'black'} traduzir={false} style={styles.textoMensagem}>
        {mensagem}
      </Texto>

      <Texto cor={escritor ? 'white' : 'black'} traduzir={false} style={styles.horario}>
        {moment(envio).format('HH[:]mm')}
      </Texto>
    </Balao>
  );
}

export default Mensagem;