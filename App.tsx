import {View, Text, StatusBar, ActivityIndicator} from 'react-native';
import React, {useLayoutEffect} from 'react';
import AppNavigatoin from './src/navigators/AppNavigatoin';
import useAuth from './src/hooks/useAuth';
import AuthNavigator from './src/navigators/AuthNavigator';

const App = () => {
  const {userToken, loading} = useAuth();

  if(loading){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }

  return userToken ? <AuthNavigator /> : <AppNavigatoin />;
};

export default App;
