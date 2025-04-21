import React, {useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import SplashScreenAnimation from '../../components/SplashScreenAnimation';
import {SCREEN_NAME} from '../../constant/ScreenName';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type SplashScreenNavigationProp = NativeStackNavigationProp<
  any,
  'SplashScreen'
>;

interface SplashScreenProps {
  navigation: SplashScreenNavigationProp;
}

const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(SCREEN_NAME.HOME_SCREEN);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SplashScreenAnimation />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
