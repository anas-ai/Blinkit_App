import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREEN_NAME } from '../constant/ScreenName';
import { LoginStack } from '../routes/Routes';

const Stack = createNativeStackNavigator();
const AuthNavigator= () => {
  return (
      <Stack.Navigator initialRouteName={SCREEN_NAME.SPLASH_SCREEN}>
        {LoginStack.map((item, index) => (
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
  );
};

export default AuthNavigator;
