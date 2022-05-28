import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

import Texto from './../../components/Texto';
import ExpositorStatus from './../../components/ExpositorStatus';

function Status({ navigation, usuario, status = [] }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ExpositorStatus
          {...status[0]}
          key={status[0]._id} 
          usuario={usuario} />

      <View style={styles.atualizacoes}>
        <Texto style={styles.textoAtualizacoes}>Atualizações recentes</Texto>
      </View>

      {status.filter(({ contato }) => contato._id !== usuario._id).map((value, index) => (
        <ExpositorStatus
          {...value}
          key={value._id} 
          usuario={usuario}
          ultimoExpositor={index === status.length - 2} />
      ))}
    </ScrollView>
  );
}

export default Status;