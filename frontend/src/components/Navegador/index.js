import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import PhotoCamera from './../../assets/icons/PhotoCamera';

import Texto from './../Texto';

const photoCamera = {
  width:  20,
  height: 20,

  fill: 'white',
  
  style: { opacity: .75 }
};

// TODO criar um componente a partir de uma aba com opção para notificações

function Navegador({ abaSelecionada = 'Conversas', conversasNaoLidas = 48, statusInedito = true }) {
  function verificar(aba, retorno = styles.nomeAbaSelecionada) {
    return aba === abaSelecionada ? retorno : null;
  }

  function abrirCamera() {
    // alert('Abrindo câmera...');
  }

  return (
    <>
      <View style={styles.navegador}>
        <TouchableOpacity style={styles.camera} onPress={abrirCamera}>
          <PhotoCamera {...photoCamera} />
        </TouchableOpacity>

        <View style={styles.abas}>
          <TouchableOpacity style={[styles.aba, verificar('Conversas', styles.abaSelecionada)]}>
            <Texto negrito style={[styles.nomeAba, verificar('Conversas')]}>Conversas</Texto>
            
            {conversasNaoLidas ? (
              <View style={[
                  styles.conversasNaoLidas,
                  verificar('Conversas', {
                    backgroundColor: 'rgba(255, 255, 255, 1)'
                  })
                ]}>
                <Texto negrito style={styles.qtdConversasNaoLidas}>{conversasNaoLidas > 99 ? 99 : conversasNaoLidas}</Texto>
              </View>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity style={styles.aba}>
            <Texto negrito style={[styles.nomeAba, verificar('Status')]}>Status</Texto>
          
            {statusInedito ? <View style={[styles.statusInedito, verificar('Status')]} /> : null}
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.aba}>
            <Texto negrito style={[styles.nomeAba, verificar('Chamadas')]}>Chamadas</Texto>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Navegador;