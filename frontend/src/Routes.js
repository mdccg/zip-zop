import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home    from './screens/Home';
import Contatos from './screens/Contatos';
import Conversa from './screens/Conversa';

const Stack = createStackNavigator();

const options = { header: () => null };

function Routes({ usuario = {} }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={options}>
          {props => <Home {...props} usuario={usuario} />}
        </Stack.Screen>
        <Stack.Screen name="Contatos" options={options}>
          {props => <Contatos {...props} usuario={usuario} />}
        </Stack.Screen>
        <Stack.Screen name="Conversa" options={options}>
          {props => <Conversa {...props} usuario={usuario} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;