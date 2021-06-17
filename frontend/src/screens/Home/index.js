import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import RectangularLinedSpeechBubble from './../../assets/icons/RectangularLinedSpeechBubble';

import Header   from './../../components/Header';
import Navegador  from './../../components/Navegador';

import Conversas from './../Conversas';

import bancoMock from './../../tmp/bancoMock';

function Home({ navigation, usuario = {} }) {
  const [abaSelecionada, setAbaSelecionada] = useState('Conversas');

  const [conversas, setConversas] = useState([]);

  const [conversasNaoLidas, setConversasNaoLidas] = useState(0);
  const [chamadasPerdidas, setChamadasPerdidas] = useState(0);
  const [statusInedito, setStatusInedito]     = useState(false);

  function iniciarConversa() {
    navigation.navigate('Contatos');
  }

  function buscarConversas() {
    // TODO back-end aqui
    let { conversasMock: conversas } = bancoMock;
    let conversasNaoLidas = conversas.filter(({ mensagensNaoLidas }) => mensagensNaoLidas > 0).length;
    
    setConversas(conversas);
    setConversasNaoLidas(conversasNaoLidas);
  }

  useEffect(() => {
    buscarConversas();
  }, []);

  return (
    <>
      <Header />
      <Navegador
        abaSelecionada={abaSelecionada}
        setAbaSelecionada={setAbaSelecionada}
        conversasNaoLidas={conversasNaoLidas}
        chamadasPerdidas={chamadasPerdidas}
        statusInedito={statusInedito} />

      <View style={styles.carrossel}>
        <Conversas
          conversas={conversas}
          navigation={navigation}
          usuario={usuario} />
      </View>

      <TouchableOpacity style={styles.iniciarConversa} onPress={iniciarConversa}>
        <RectangularLinedSpeechBubble
          width={24}
          height={24} />
      </TouchableOpacity>
    </>
  );
}

export default Home;