import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home    from './screens/Home';
import Contatos from './screens/Contatos';

const Stack = createStackNavigator();

const options = { header: () => null };

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"     component={Home} options={options} />
        <Stack.Screen name="Contatos" component={Contatos} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;