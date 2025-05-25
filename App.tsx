import {View, Text, StatusBar, ActivityIndicator} from 'react-native';
import React, {useLayoutEffect} from 'react';
import useAuth from './src/hooks/useAuth';
import AuthNavigator from './src/navigators/AuthNavigator';
import LoadingPage from './src/components/animationsLottie/LoadingPage';
import LoginNavigator from './src/navigators/LoginNavigator';
import { colors } from './src/styles/Colors';

const App = () => {
  const {userToken, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large" color={colors.green} />
      </View>
    );
  }

  return userToken ? <AuthNavigator /> : <LoginNavigator />;
};

export default App;
