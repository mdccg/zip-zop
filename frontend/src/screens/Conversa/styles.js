import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  cabecalho: {
    zIndex: 3,

    backgroundColor: paleta.wetAsphalt,

    paddingRight: 8,

    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,

    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: .5,
    shadowRadius: 4,
    elevation: 5,
  },

  btnVoltar: {
    justifyContent: 'center',
    alignItems: 'center',

    width:  40,
    height: 64,
  },
  
  upArrow: {
    transform: [{ rotate: '-90deg' }]
  },

  fotoPerfil: {
    width:  48,
    height: 48,

    borderRadius: 48,
  },

  textos: {
    marginLeft: 8,

    justifyContent: 'center',
    minHeight: 64,
  },

  apelido: {
    fontFamily: 'RobotoBold',
    fontSize: 18,

    color: 'white',

    marginBottom: 4,
  },

  status: {
    fontSize: 12,

    color: 'white',
  },
  
  planoFundo: {
    backgroundColor: paleta.wetAsphaltTenPercentIncreased,

    position: 'absolute',

    width:  '100%',
    height: '100%',

    resizeMode: 'cover',

    zIndex: 1,
  },
});

export default styles;