import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const linha = { flexDirection: 'row', alignItems: 'center' };

const styles = StyleSheet.create({
  expositorStatus: {
    backgroundColor: 'white',

    minHeight: 64,
    padding: 12,

    ...linha,
  },

  preview: {
    ...linha,
    flex: 1,
  },

  previewTexto: {
    width:  64 - 12,
    height: 64 - 12,
    borderRadius: 64 - 12,

    justifyContent: 'center',
    alignItems: 'center',
  },

  textoPreviewTexto: {
    margin: 4,

    color: 'white',
    fontSize: 8,

    textAlign: 'center',
  },

  textos: {
    marginLeft: 12,

    justifyContent: 'center',
    minHeight: 64,
    flex: 1,
  },

  apelido: {
    fontFamily: 'RobotoBold',
    fontSize: 16,

    marginBottom: 4,
  },

  abrirMenu: {
    width:  64,
    height: 64,

    justifyContent: 'center',
    alignItems: 'center',
  },

  showMoreButtonWithThreeDots: {
    transform: [{ rotate: '90deg' }]
  },

  rodape: {
    backgroundColor: 'white',
    
    paddingRight: 12,
    paddingLeft:  12,
  },

  linhaExterna: {
    backgroundColor: paleta.clouds,
    
    width: '100%',
    height: 1,
  },
});

export default styles;