import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import GuestScreen from './screens/GuestScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" 
        screenOptions={ {
          headerTintColor: "#fff",
          headerStyle:{
            backgroundColor: "orange",
          }
        }


      }>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Guest" component={GuestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
