import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { styles } from '../../assets/animations/animationStyle';

const LoadingPage = () => {
  return (
    <LottieView
      source={require('../../assets/animations/loadingPage.json')}
      autoPlay
      loop
      style={styles.animationStyle}
    />
  );
};

export default LoadingPage;


