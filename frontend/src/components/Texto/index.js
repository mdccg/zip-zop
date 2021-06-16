import React from 'react';
import { Text, StyleSheet } from 'react-native';

import translations from './../../config/translations.json';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.defaultLocale = 'pt-BR';
i18n.translations = translations;
i18n.locale     = Localization.locale;
i18n.fallbacks = true;

function Texto({
  tamanho = 14,
  negrito,
  italico,

  style,
  children,
  traduzir = true
}) {
  
  const estilo = [];
  estilo.push({ fontSize: tamanho });
  estilo.push(styles.robotoRegular);

  if(negrito) estilo.push(styles.robotoBold);
  if(italico) estilo.push(styles.robotoItalic);
  
  if(negrito && italico) estilo.push(styles.robotoBoldItalic);

  return <Text style={[...estilo, style]}>{typeof children === 'string' && traduzir ? i18n.t(children, { defaultValue: children }) : children}</Text>;
}

const styles = StyleSheet.create({
  robotoBlack: { fontFamily: 'RobotoBlack' },
  robotoBlackItalic: { fontFamily: 'RobotoBlackItalic' },
  robotoBold: { fontFamily: 'RobotoBold' },
  robotoBoldItalic: { fontFamily: 'RobotoBoldItalic' },
  robotoItalic: { fontFamily: 'RobotoItalic' },
  robotoLight: { fontFamily: 'RobotoLight' },
  robotoLightItalic: { fontFamily: 'RobotoLightItalic' },
  robotoMedium: { fontFamily: 'RobotoMedium' },
  robotoMediumItalic: { fontFamily: 'RobotoMediumItalic' },
  robotoRegular: { fontFamily: 'RobotoRegular' },
  robotoThin: { fontFamily: 'RobotoThin' },
  robotoThinItalic: { fontFamily: 'RobotoThinItalic' }
});

export default Texto;