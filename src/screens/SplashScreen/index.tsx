import React, {useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet, StatusBar, Platform} from 'react-native';
import SplashScreenAnimation from '../../components/animationsLottie/SplashScreenAnimation';
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
      navigation.replace(SCREEN_NAME.OTP_SCREEN);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {Platform.OS==='android' &&(
        <StatusBar hidden={true}/>
      )}
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
