import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  mensagem: {
    margin: 8,

    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  minhaMensagem: {
    alignSelf: 'flex-end',
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

  balao: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    backgroundColor: 'white',

    borderTopRightRadius:  2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,

    padding: 12,
  },

  meuBalao: {
    backgroundColor: paleta.wetAsphalt,
  },

  textoMensagem: {
    paddingRight: 32,
    
    lineHeight: 20,
  },

  horario: {
    position: 'absolute',

    right:  8,
    bottom: 8,

    alignSelf: 'flex-end',
  },
  
  textoHorario: {
    fontSize: 10,
  
    opacity: .5,
  },
});

export default styles;