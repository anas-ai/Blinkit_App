import React from 'react';
import LottieView from 'lottie-react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constant/dimensions';
import {StyleSheet} from 'react-native';
import { styles } from '../../assets/animations/animationStyle';

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


