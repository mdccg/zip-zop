import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  carrossel: {
    flexDirection: 'column',
    flex: 1,
  },

  iniciarConversa: {
    position: 'absolute',

    right:  24,
    bottom: 24,

    width:  64,
    height: 64,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: paleta.wetAsphalt,
    borderRadius: 64,
  }
});

export default styles;