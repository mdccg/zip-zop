import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import MagnifyingGlass from './../../assets/icons/MagnifyingGlass';
import ShowMoreButtonWithThreeDots from './../../assets/icons/ShowMoreButtonWithThreeDots';

import Texto from './../Texto';

const icone = {
  fill: 'white'
};

function Header() {
  function pesquisar() {
    alert('Pesquisando...');
  }

  function abrirMenu() {
    alert('Abrindo menu...');
  }
  
  return (
    <View style={styles.header}>
      <Texto negrito style={styles.nomeApp}>Zip Zop</Texto>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={pesquisar}>
          <MagnifyingGlass  
             width={20}
            height={20}
            fill="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={abrirMenu}>
          <ShowMoreButtonWithThreeDots
             width={16} 
            height={16}
            fill="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;