import {View, Text, StatusBar, ActivityIndicator} from 'react-native';
import React, {useLayoutEffect} from 'react';
import useAuth from './src/hooks/useAuth';
import LoadingPage from './src/components/animationsLottie/LoadingPage';
import { colors } from './src/styles/Colors';
import HomeNavigator from './src/navigators/HomeNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const {userToken, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large" color={colors.green} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;