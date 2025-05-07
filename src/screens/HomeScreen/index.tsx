import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/GlobalStyle';

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.globalContainer}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
