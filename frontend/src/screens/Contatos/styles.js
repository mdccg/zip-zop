import { StyleSheet, Dimensions } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: paleta.wetAsphalt,

    paddingRight: 16,
    paddingLeft:  16,

    height: 64,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  btnTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  btnVoltar: {
    marginRight: 32,
    
    justifyContent: 'center',
    alignItems: 'center',

    width:  32,
    height: 32,
  },
  
  upArrow: {
    transform: [{ rotate: '-90deg' }]
  },

  titulo: {
    color: 'white',
    fontSize: 20,
  },

  qtdContatos: {
    color: 'white',
    opacity: .9,
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

  contatos: {
    minHeight: Dimensions.get('screen').height - 136,
  },
  
  contatosFlatList: {
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft:  16,
  },

  incrementador: {
    flexDirection: 'row',
    alignItems: 'center',

    minHeight: 64,
  },

  incrementadorIcone: {
    marginRight: 16,

    backgroundColor: paleta.peterRiver,
    borderRadius: 48,

    width:  48,
    height: 48,

    justifyContent: 'center',
    alignItems: 'center',
  },

  incrementadorTexto: {
    fontSize: 16,
  },
});

export default styles;