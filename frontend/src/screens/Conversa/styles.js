import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const assombrado = {
  shadowOffset: { width: 0, height: 0 },
  shadowColor: 'black',
  shadowOpacity: .5,
  shadowRadius: 4,
  elevation: 5,
};

const styles = StyleSheet.create({
  cabecalho: {
    zIndex: 3,

    backgroundColor: paleta.wetAsphalt,

    flexDirection: 'row',
    alignItems: 'center',

    minHeight: 64,

    ...assombrado,
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
    flex: 1,

    minHeight: 64,
  },

  apelido: {
    fontFamily: 'RobotoBold',
    fontSize: 16,

    color: 'white',

    marginBottom: 4,
  },

  status: {
    color: 'white',
    fontSize: 12,

    opacity: .75,
  },
  
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',

    marginRight: 16,
  },

  botao: {
    marginLeft: 16,

    width:  32,
    height: 32,

    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  rodape: {
    zIndex: 3,

    position: 'absolute',
    bottom: 0,

    flexDirection: 'row',
    alignItems: 'center',

    minHeight: 64,
    padding: 10,

    width: '100%',
    flex: 1,
  },

  input: {
    fontFamily: 'RobotoRegular',

    backgroundColor: 'white',
    borderRadius: 32,

    paddingRight: 16,
    paddingLeft:  16,

    height: '100%',
    flex: 1,

    ...assombrado,
  },

  enviar: {
    marginLeft: 8,

    backgroundColor: paleta.lightbrown,
    borderRadius: 48,
    
    width:  48,
    height: 48,

    justifyContent: 'center',
    alignItems: 'center',

    ...assombrado,
  },

  desabilitado: { backgroundColor: paleta.silver },

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