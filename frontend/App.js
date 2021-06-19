import React, { useState, useEffect } from 'react';
import { View }   from 'react-native';

import bancoMock from './src/tmp/bancoMock';

import Routes from './src/Routes';

import i18n    from 'i18n-js';

import moment    from 'moment';

import Constants  from 'expo-constants';

import AppLoading  from 'expo-app-loading';

import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';

moment.updateLocale(i18n.locale.toLowerCase());

function App() {
  const [loaded] = useFonts({
    RobotoBlack:        require('./src/assets/fonts/Roboto/Roboto-Black.ttf'),
    RobotoBlackItalic:  require('./src/assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
    RobotoBold:         require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
    RobotoBoldItalic:   require('./src/assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
    RobotoItalic:       require('./src/assets/fonts/Roboto/Roboto-Italic.ttf'),
    RobotoLight:        require('./src/assets/fonts/Roboto/Roboto-Light.ttf'),
    RobotoLightItalic:  require('./src/assets/fonts/Roboto/Roboto-LightItalic.ttf'),
    RobotoMedium:       require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
    RobotoMediumItalic: require('./src/assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
    RobotoRegular:      require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    RobotoThin:         require('./src/assets/fonts/Roboto/Roboto-Thin.ttf'),
    RobotoThinItalic:   require('./src/assets/fonts/Roboto/Roboto-ThinItalic.ttf'),
  });

  const [usuario, setUsuario] = useState({});
  const [buscandoUsuario, setBuscandoUsuario] = useState(true);

  async function buscarUsuario() {
    // TODO back-end aqui
    let { usuarioMock: usuario } = bancoMock;
    await setUsuario(usuario);
    setBuscandoUsuario(false);
  }

  useEffect(() => {
    buscarUsuario();
  });

  return !buscandoUsuario && loaded ? (
    <>
      <StatusBar backgroundColor="#2c3e50" style="light" />
      <View style={{ height: Constants.statusBarHeight }} />
      <Routes usuario={usuario} />
    </>
  ) : <AppLoading />;
}

export default App;