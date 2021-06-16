import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

import RectangularLinedSpeechBubble from './../../assets/icons/RectangularLinedSpeechBubble';

import Texto   from './../../components/Texto';
import Header   from './../../components/Header';
import Navegador  from './../../components/Navegador';

function Home({ navigation }) {
  const [abaSelecionada, setAbaSelecionada] = useState('Conversas');

  const [conversasNaoLidas, setConversasNaoLidas] = useState(0);
  const [chamadasPerdidas, setChamadasPerdidas] = useState(0);
  const [statusInedito, setStatusInedito]     = useState(false);

  function iniciarConversa() {
    navigation.navigate('Contatos');
  }

  function buscarConversas() {
    // TODO back-end aqui
    setConversasNaoLidas(8);
    setChamadasPerdidas(3);
    setStatusInedito(true);
  }

  useEffect(() => {
    buscarConversas();
  }, []);

  return (
    <>
      <ScrollView>
        <Header />
        <Navegador
          abaSelecionada={abaSelecionada}
          setAbaSelecionada={setAbaSelecionada}
          conversasNaoLidas={conversasNaoLidas}
          chamadasPerdidas={chamadasPerdidas}
          statusInedito={statusInedito} />

        <Texto negrito style={{ padding: 8 }}>Nunca pare até se orgulhar de você mesmo</Texto>
      </ScrollView>

      <TouchableOpacity style={styles.iniciarConversa} onPress={iniciarConversa}>
        <RectangularLinedSpeechBubble
          width={24}
          height={24} />
      </TouchableOpacity>
    </>
  );
}

export default Home;