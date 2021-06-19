import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  minhaMensagem: {
    alignSelf: 'flex-end',
  },
  
  meuTriangulo: {
    width:  0,
    height: 0,

    borderTopWidth:   12,
    borderRightWidth: 12,

    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',

    borderTopColor: paleta.wetAsphalt,
  },

  meuBalao: {
    backgroundColor: paleta.wetAsphalt,
  },

  mensagem: {
    margin: 8,

    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  
  triangulo: {
    width:  0,
    height: 0,

    borderRightWidth:  12,
    borderBottomWidth: 12,

    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',

    borderRightColor: 'white',
  },

  balao: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    backgroundColor: 'white',

    borderTopRightRadius:  2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,

    padding: 8,
  },

  textoMensagem: { lineHeight: 24 },

  horario: {
    fontSize: 12,

    opacity: .5,
    padding: 4,
  },
});

export default styles;