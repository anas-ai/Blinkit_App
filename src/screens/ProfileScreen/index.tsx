import {View, Text, SafeAreaView, Platform, StatusBar} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/GlobalStyle';

const ProfileIndex = () => {
  return (
    <SafeAreaView
      style={[
        globalStyles.globalContainer,
        {
          paddingTop:
            Platform.OS === 'android' ? StatusBar.currentHeight ?? 24 : 0,
        },
      ]}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      )}
      <Text>ProfileIndex</Text>
    </SafeAreaView>
  );
};

export default ProfileIndex;
