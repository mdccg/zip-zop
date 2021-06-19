import { StyleSheet } from 'react-native';

import paleta from './../../stylesheets/paleta';

const styles = StyleSheet.create({
  dia: {
    alignSelf: 'center',

    backgroundColor: paleta.lightbrown,
    borderRadius: 2,

    marginTop:    16,
    marginBottom: 16,

    padding: 8,
  },

  textoDia: {
    color: 'white',

    opacity: .75,
  },
});

export default styles;