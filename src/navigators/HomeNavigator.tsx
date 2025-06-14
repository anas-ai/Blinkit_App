import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthStack } from '../routes/Routes';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {

  
  return (
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
  );
};

export default HomeNavigator;
