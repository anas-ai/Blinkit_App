import React from 'react';
import LottieView from 'lottie-react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constant/dimensions';
import {StyleSheet} from 'react-native';

const SplashScreenAnimation = () => {
  return (
    <LottieView
      source={require('../../assets/animations/SplashScreen.json')}
      autoPlay
      loop
      style={styles.animationStyle}
    />
  );
};

export default SplashScreenAnimation;

const styles = StyleSheet.create({
  animationStyle: {
    flex: 1,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
