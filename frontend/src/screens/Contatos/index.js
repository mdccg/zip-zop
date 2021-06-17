import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';

import UpArrow from './../../assets/icons/UpArrow';
import UserPlusSolid  from './../../assets/icons/UserPlusSolid';
import MagnifyingGlass from './../../assets/icons/MagnifyingGlass';
import UserFriendsSolid from './../../assets/icons/UserFriendsSolid';
import ShowMoreButtonWithThreeDots from './../../assets/icons/ShowMoreButtonWithThreeDots';

import Texto from './../../components/Texto';
import Contato from './../../components/Contato';

import bancoMock from './../../tmp/bancoMock';

const icone = {
  width:  20,
  height: 20,

  fill: 'white'
};

function Incrementador({ funcao, icone: Icone, children }) {
  return (
    <TouchableOpacity style={styles.incrementador} onPress={funcao}>
      <View style={styles.incrementadorIcone}>
        <Icone 
          width={24}
          height={24}
          fill="white" />
      </View>

      <Texto negrito style={styles.incrementadorTexto}>{children}</Texto>
    </TouchableOpacity>
  );
}

function Contatos({ navigation }) {
  const [contatos, setContatos] = useState([]);

  function pesquisar() {
    alert('Pesquisando...');
  }
  
  function abrirMenu() {
    alert('Abrindo menu...');
  }

  function adicionarGrupo() {

  }

  function adicionarContato() {

  }

  function buscarContatos() {
    // TODO back-end aqui
    let { configuracoesContatosMock: contatos } = bancoMock;
    setContatos(contatos);
  }

  useEffect(() => {
    buscarContatos();
  }, []);

  return (
    <>
      <View style={styles.cabecalho}>
        <View style={styles.btnTitulo}>
          <TouchableOpacity style={styles.btnVoltar} onPress={navigation.goBack}>
            <UpArrow {...icone} style={styles.upArrow} />
          </TouchableOpacity>

          <View>
            <Texto negrito style={styles.titulo}>Contatos</Texto>
            <Texto style={styles.qtdContatos}>
              <Texto>{contatos.length}</Texto>
              <Texto>&nbsp;</Texto>
              <Texto>contatos</Texto>
            </Texto>
          </View>
        </View>

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={pesquisar}>
            <MagnifyingGlass {...icone} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={abrirMenu}>
            <ShowMoreButtonWithThreeDots {...icone} />
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={styles.contatos}>
        {contatos.length > 0 ? (
          <FlatList
            style={styles.contatosFlatList}
            ListHeaderComponent={(
              <View>
                <Incrementador funcao={adicionarGrupo}   icone={UserFriendsSolid}>Novo grupo</Incrementador>
                <Incrementador funcao={adicionarContato} icone={UserPlusSolid}>Novo contato</Incrementador>
              </View>
            )}
            ListFooterComponent={<View style={{ height: 16 }} />}
            renderItem={({ item }) => <Contato {...item} />}
            keyExtractor={contato => contato._id}
            data={contatos} />
        ) : null}
      </SafeAreaView>
    </>
  );
}

export default Contatos;