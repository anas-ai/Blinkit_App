import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Stack_Screens} from '../routes/Routes';
import { SCREEN_NAME } from '../constant/ScreenName';

const Stack = createNativeStackNavigator();
const AppNavigatoin = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN_NAME.SPLASH_SCREEN}>
        {Stack_Screens.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item?.name}
            component={item?.component}
            options={{
              headerShown: false,
              gestureEnabled: true,
              animation: 'slide_from_right',
              animationDuration: 500,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatoin;
