import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'column',
    flex: 1,
  },

  atualizacoes: {
    padding: 16,
  },

  textoAtualizacoes: {
    fontFamily: 'RobotoBold',
    color: paleta.americanRiver,
    fontSize: 16,
  },
});

export default styles;