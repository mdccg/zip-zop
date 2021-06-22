import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import styles from './styles';

import Texto from './../Texto';
import Mensagem from './../Mensagem';

function MensagensDiarias({ dias = {}, usuario = {} }) {
  return (
    <SafeAreaView style={{ zIndex: 2 }}>
      <FlatList
        renderItem={({ item: dia }) => {
          const mensagens = dias[dia];

          return (
            <View key={dia}>
              <FlatList
                ListHeaderComponent={(
                  <View style={styles.dia}>
                    <Texto style={styles.textoDia} traduzir={false}>{dia}</Texto>
                  </View>
                )}
                ListFooterComponent={<View style={{ height: 128 }} />}
                renderItem={({ item: mensagem }) => <Mensagem {...mensagem} usuario={usuario} />}
                keyExtractor={({ _id }) => _id}
                data={mensagens} />
            </View>
          );
        }}
        keyExtractor={item => item}
        data={Object.keys(dias)} />
    </SafeAreaView>
  );
}

export default MensagensDiarias;