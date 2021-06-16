import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  contato: {
    flexDirection: 'row',
    alignItems: 'center',

    minHeight: 64,
  },

  fotoPerfil: {
    marginRight: 16,

    borderRadius: 48,

    width:  48,
    height: 48,
  },

  textos: {
    justifyContent: 'center',

    minHeight: 64,
    flex: 1,
  },

  apelido: {
    fontSize: 16,

    marginBottom: 4,
  },

  recado: {
    color: paleta.americanRiver,
  },
});

export default styles;