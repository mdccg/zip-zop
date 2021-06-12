import React   from 'react';
import { View } from 'react-native';

import Routes    from './src/Routes';

import Constants  from 'expo-constants';

import AppLoading  from 'expo-app-loading';

import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';

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

  return loaded ? (
    <>
      <StatusBar backgroundColor="#2c3e50" style="light" />
      <View style={{ height: Constants.statusBarHeight }} />
      <Routes />
    </>
  ) : <AppLoading />;
}

export default App;