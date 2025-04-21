import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height
const SCREEN_WIDTH = Dimensions.get('screen').width
const SplashScreenAnimation = () => {
  return (
    <LottieView source={require('../assets/animations/SplashScreen.json')} autoPlay loop style={{
        flex:1,
        height: SCREEN_HEIGHT ,
        width:SCREEN_WIDTH ,
        alignItems:'center',
        justifyContent:'center'
    }}/>
  )
}

export default SplashScreenAnimation