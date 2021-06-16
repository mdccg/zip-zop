import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import PhotoCamera from './../../assets/icons/PhotoCamera';

import Texto from './../Texto';

function Aba({ nome, verificar, numero, booleano, setAbaSelecionada }) {
  return (
    <TouchableOpacity
      onPress={() => setAbaSelecionada(nome)}
      style={[styles.aba, verificar(nome, styles.abaSelecionada)]}>
      <Texto
        negrito
        style={[styles.nomeAba, verificar(nome, styles.nomeAbaSelecionada)]}>
        {nome}
      </Texto>
      
      {numero ? (
        <View style={[
          styles.numero,
          verificar(nome, { backgroundColor: 'rgba(255, 255, 255, 1)' })
          ]}>
          <Texto negrito style={styles.textoNumero}>
            {numero > 99 ? 99 : numero}
          </Texto>
        </View>
      ) : null}

      {booleano ? (
        <View style={[styles.bolinha, verificar(nome, styles.nomeAbaSelecionada)]} />
      ) : null}
    </TouchableOpacity>
  );
}

function Navegador({ abaSelecionada, setAbaSelecionada, conversasNaoLidas, chamadasPerdidas, statusInedito }) {
  function verificar(aba, retorno) {
    return aba === abaSelecionada ? retorno : null;
  }

  function abrirCamera() {
    alert('Abrindo câmera...');
  }

  return (
    <>
      <View style={styles.navegador}>
        <TouchableOpacity style={styles.camera} onPress={abrirCamera}>
          <PhotoCamera
            width={20}
            height={20}
            fill="white"
            style={styles.photoCamera} />
        </TouchableOpacity>

        <View style={styles.abas}>
          <Aba
            nome="Conversas"
            verificar={verificar}
            numero={conversasNaoLidas}
            setAbaSelecionada={setAbaSelecionada} />
            
            <Aba
              nome="Status"
              verificar={verificar}
              booleano={statusInedito}
              setAbaSelecionada={setAbaSelecionada} />
            
            <Aba
              nome="Chamadas"
              verificar={verificar}
              numero={chamadasPerdidas}
              setAbaSelecionada={setAbaSelecionada} />
        </View>
      </View>
    </>
  );
}

export default Navegador;