import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import styles from './styles';

import ExpositorConversa from './../../components/ExpositorConversa';

function Conversas({ conversas = [], navigation, usuario = {} }) {
  return (
    <SafeAreaView>
      {conversas.length > 0 ? (
        <FlatList
          style={styles.conversasFlatList}
          ListFooterComponent={<View style={{ height: 16 }} />}
          renderItem={({ item: conversa }) => {
            
            if(conversa.tipo === 'Conversa')
              return (
                <ExpositorConversa
                  {...conversa}
                  navigation={navigation}
                  usuario={usuario} />
              );

            return null;
          }}
          keyExtractor={conversa => conversa._id}
          data={conversas} />
      ) : null}
    </SafeAreaView>
  );
}

export default Conversas;