import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  navegador: {
    backgroundColor: paleta.wetAsphalt,

    flexDirection: 'row',
    alignItems: 'center',

    height: 48,
  },

  camera: {
    width:  48,
    height: 48,

    justifyContent: 'center',
    alignItems: 'center',
  },

  photoCamera: { opacity: .75 },

  abas: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  aba: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',

    height: 48,
    flex: 1,

    borderBottomColor: paleta.wetAsphalt,
    borderBottomWidth: 4,
  },

  nomeAba: {
    color: 'white',

    textTransform: 'uppercase',
    opacity: .5,
  },

  abaSelecionada: { borderBottomColor: 'white' },

  nomeAbaSelecionada: { opacity: 1 },

  numero: {
    marginLeft: 8,

    backgroundColor: 'rgba(255, 255, 255, .5)',
    borderRadius: 16,

    width:  20,
    height: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  textoNumero: {
    color: paleta.wetAsphalt,
    fontSize: 12,
  },

  bolinha: {
    marginLeft: 8,

    backgroundColor: 'white',
    borderRadius: 16,
    opacity: .5,

    width:  8,
    height: 8,
  },

  barras: {
    backgroundColor: paleta.wetAsphalt,
    
    paddingRight: 16,
    paddingLeft:  48,

    height: 4,
    flex: 1,
  },

  barra: {
    height: 4,
  },
});

export default styles;