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

const { width } = Dimensions.get('window');

const abas = ['Conversas', 'Status', 'Chamadas'];

function Home({ navigation, usuario = {} }) {
  const [abaSelecionada, setAbaSelecionada] = useState('Conversas');

  const [conversas, setConversas] = useState([]);
  const [chamadas, setChamadas] = useState([]);
  const [status, setStatus]     = useState([]);

  const [conversasNaoLidas, setConversasNaoLidas] = useState(0);
  const [chamadasPerdidas, setChamadasPerdidas] = useState(0);
  const [statusInedito, setStatusInedito]     = useState(false);

  const carouselRef = useRef();

  const telas = [
    { Componente: Conversas, props: { navigation, usuario, conversas } },
    { Componente: Status,    props: { navigation, usuario, status } },
    { Componente: Chamadas,  props: { navigation, usuario } }
  ];

  function atualizarAbaSelecionadaAoClicar(abaSelecionada) {
    carouselRef.current.snapToItem(abas.indexOf(abaSelecionada));
    setAbaSelecionada(abaSelecionada);
  }

  function atualizarAbaSelecionadaAoRolar() {
    let abaSelecionada = abas[carouselRef.current.currentIndex];
    setAbaSelecionada(abaSelecionada);
  }

  function buscarConversas() {
    // TODO back-end aqui
    let { conversasMock: conversas } = bancoMock;
    let conversasNaoLidas = conversas.filter(({ mensagensNaoLidas }) => mensagensNaoLidas > 0).length;
    
    setConversas(conversas);
    setConversasNaoLidas(conversasNaoLidas);
  }

  function buscarChamadas() {

  }

  function buscarStatus() {
    // TODO back-end aqui
    let { statusMock: status } = bancoMock;
    let statusInedito = status.filter(({ contato, qtdStatusNaoVisualizados }) => {
      if(contato._id === usuario._id) return false;
      return qtdStatusNaoVisualizados > 0;
    }).length > 0;
    
    setStatus(status);
    setStatusInedito(statusInedito);
  }

  useEffect(() => {
    buscarConversas();
    buscarStatus();
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
          enableMomentum
          onSnapToItem={atualizarAbaSelecionadaAoRolar}
          renderItem={({ item: { Componente, props = {} } }) => {
            return <Componente {...props} />;
          }}
          sliderWidth={width}
          itemWidth={width}
          ref={carouselRef} />
      </View>
    </>
  );
}

export default Home;