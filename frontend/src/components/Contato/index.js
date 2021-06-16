import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

import Texto from './../Texto';

function encurtar(string, limite) {
  return string.split('').length > limite
    ? string.split('').splice(0, limite).join('') + '...'
    : string;
}

function Contato({ contato: { _id, fotoPerfil, nome, recado = '', contato }, apelido, notificacoesMutadas, notificacaoPersonalizada, visibilidadeMidia, grupos, bloqueado }) {

  const apelidoCurto = encurtar(apelido, 33);
  const recadoCurto  = encurtar(recado, 38);

  return (
    <TouchableOpacity style={styles.contato}>
      <Image style={styles.fotoPerfil} source={{ uri: fotoPerfil }} />

      <View style={styles.textos}>
        <Texto style={styles.apelido} traduzir={false} negrito>{apelidoCurto}</Texto>
        <Texto style={styles.recado}  traduzir={false}>{recadoCurto}</Texto>
      </View>
    </TouchableOpacity>
  );
}

export default Contato;