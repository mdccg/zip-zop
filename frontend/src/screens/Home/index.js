import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions } from 'react-native';
import styles from './styles';

import Navegador   from './../../components/Navegador';
import Header     from './../../components/Header';

import Conversas from './../Conversas';
import Status    from './../Status';
import Chamadas  from './../Chamadas';

import bancoMock from './../../tmp/bancoMock';

import Carousel  from 'react-native-snap-carousel';

const abas = ['Conversas', 'Status', 'Chamadas'];

function Home({ navigation, usuario = {} }) {
  const [abaSelecionada, setAbaSelecionada] = useState('Conversas');

  const [conversas, setConversas] = useState([]);

  const [conversasNaoLidas, setConversasNaoLidas] = useState(0);
  const [chamadasPerdidas, setChamadasPerdidas] = useState(0);
  const [statusInedito, setStatusInedito]     = useState(false);

  const carouselRef = useRef();

  const telas = [
    { Componente: Conversas, props: { conversas, navigation, usuario } },
    { Componente: Status,    props: { navigation } },
    { Componente: Chamadas,  props: { navigation, usuario } }
  ];

  function atualizarAbaSelecionadaAoClicar(abaSelecionada) {
    carouselRef.current.snapToItem(abas.indexOf(abaSelecionada));
    setAbaSelecionada(abaSelecionada);
  }

  function atualizarAbaSelecionadaAoRolar(currentIndex) {
    let abaSelecionada = abas[currentIndex];
    setAbaSelecionada(abaSelecionada);
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
        setAbaSelecionada={atualizarAbaSelecionadaAoClicar}
        conversasNaoLidas={conversasNaoLidas}
        chamadasPerdidas={chamadasPerdidas}
        statusInedito={statusInedito} />

      <View style={styles.carrossel}>
        <Carousel
          data={telas}
          onSnapToItem={atualizarAbaSelecionadaAoRolar}
          renderItem={({ item: { Componente, props = {} } }) => {
            return <Componente {...props} />;
          }}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          ref={carouselRef} />
      </View>
    </>
  );
}

export default Home;