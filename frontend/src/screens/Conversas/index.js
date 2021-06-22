import React from 'react';
import { SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native';
import styles from './styles';

import RectangularLinedSpeechBubble from './../../assets/icons/RectangularLinedSpeechBubble';

import ExpositorConversa from './../../components/ExpositorConversa';

function Conversas({ conversas = [], navigation, usuario = {} }) {
  function iniciarConversa() {
    navigation.navigate('Contatos');
  }
  
  return (
    <>
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
    
      <TouchableOpacity style={styles.iniciarConversa} onPress={iniciarConversa}>
        <RectangularLinedSpeechBubble
          width={24}
          height={24} />
      </TouchableOpacity>
    </>
  );
}

export default Conversas;