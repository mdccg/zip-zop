import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  conversasFlatList: {
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft:  16,
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