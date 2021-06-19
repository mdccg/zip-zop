import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  conversa: {
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

  corpo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  textos: { flex: 1 },

  apelido: {
    fontSize: 16,

    marginBottom: 4,
  },

  mensagem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  check: {
    marginRight: 4,
  },

  textoMensagem: { color: paleta.americanRiver },

  girondino: {
    justifyContent: 'space-evenly',
    alignItems: 'center',

    height: 64,
  },

  dataUltimaMensagem: {
    fontSize: 12,
  },

  mensagensNaoLidas: {
    backgroundColor: paleta.peterRiver,
    borderRadius: 32,

    paddingRight: 8,
    paddingLeft:  8,

    height: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  textoMensagensNaoLidas: {

    color: 'white',
    fontSize: 10,
  },
});

export default styles;