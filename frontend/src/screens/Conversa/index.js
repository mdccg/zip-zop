import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

import Texto from './../../components/Texto';

import bancoMock from './../../tmp/bancoMock';

function Conversa({ navigation, route, usuario = {} }) {
  const [mensagens, setMensagens] = useState([]);

  function buscarConversa() {
    // TODO back-end aqui

    let { conversasMock: conversas } = bancoMock;
    let { idConversa } = route.params;
    let conversa = [...conversas.filter(({ _id }) => _id === idConversa)].pop();

    let { _id, tipo, contato, mensagens, mensagensNaoLidas, fixado } = conversa;

    setMensagens(mensagens);
  }

  useEffect(() => {
    buscarConversa();
  }, []);

  return (
    <>
      <ScrollView>
        {mensagens.map(({ _id, remetente, mensagem, envio, recebido, visualizado }, index) => (
          <View key={index}>
            <Texto>{mensagem}</Texto>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

export default Conversa;