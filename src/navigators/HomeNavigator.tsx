import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SCREEN_NAME} from '../constant/ScreenName';
import { AuthStack, LoginStack } from '../routes/Routes';
import { useThemeStore } from '../store/themeStore';
import { darkTheme, lightTheme } from '../themes/themes';

const Stack = createNativeStackNavigator();

const resolvedTheme = useThemeStore(state => state.resolvedTheme)
const theme = resolvedTheme === 'dark'? darkTheme : lightTheme

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {AuthStack.map((item, index) => (
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

export default HomeNavigator;
