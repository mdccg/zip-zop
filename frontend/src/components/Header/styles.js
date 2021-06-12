import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  header: {
    backgroundColor: paleta.wetAsphalt,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

    padding: 16,

    height: 64,
  },

  titulo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  nomeApp: {
    color: 'white',
    fontSize: 24,
  },

  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  botao: {
    marginLeft: 16,

    width:  32,
    height: 32,

    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default styles;