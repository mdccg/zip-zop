import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import styles from './styles';

import Conversa from './../../components/Conversa';

function Conversas({ conversas = [] }) {
  return (
    <SafeAreaView>
      {conversas.length > 0 ? (
        <FlatList
          style={styles.conversasFlatList}
          ListFooterComponent={<View style={{ height: 16 }} />}
          renderItem={({ item: conversa }) => {
            if(conversa.tipo === 'Conversa')
              return <Conversa {...conversa} />;

            return null;
          }}
          keyExtractor={conversa => conversa._id}
          data={conversas} />
      ) : null}
    </SafeAreaView>
  );
}

export default Conversas;