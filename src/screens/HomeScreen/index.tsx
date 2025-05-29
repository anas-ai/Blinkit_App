import React from 'react';
import {SafeAreaView, StatusBar, Platform} from 'react-native';
import Home from './Home';
import TabBarNavigator from '../../navigators/TabBarNavigator';

const HomeIndex = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Home />
    </SafeAreaView>
  );
};

export default HomeIndex;
