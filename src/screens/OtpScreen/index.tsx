import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import AutoScroll from '@homielab/react-native-auto-scroll';
import {globalStyles} from '../../styles/GlobalStyle';
import {scale} from 'react-native-size-matters';
import {hp, wp} from '../../constant/dimensions';
import ImageScrool from '../../components/OtpScreenAutoScrool';
import ImageScroll from '../../components/OtpScreenAutoScrool';

const imageset1 = [
  require('../../assets/products/1.png'),
  require('../../assets/products/2.png'),
  require('../../assets/products/3.png'),
  require('../../assets/products/4.png'),
];
const imageset2 = [
  require('../../assets/products/5.png'),
  require('../../assets/products/6.png'),
  require('../../assets/products/7.png'),
  require('../../assets/products/8.png'),
];
const imageset3 = [
  require('../../assets/products/9.png'),
  require('../../assets/products/10.png'),
  require('../../assets/products/11.png'),
  require('../../assets/products/12.png'),
];
const imageset4 = [
  require('../../assets/products/13.png'),
  require('../../assets/products/14.png'),
  require('../../assets/products/15.png'),
  require('../../assets/products/16.png'),
];

const AutoScrollExample = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageScroll
        images={imageset1}
        marginRight={scale(20)}
        marginLeft={scale(20)}
        marginTop={scale(40)}
      />
      <ImageScroll
        images={imageset2}
        marginRight={scale(20)}
        marginLeft={scale(20)}
        marginTop={scale(20)}
        gap={scale(20)}
      />
      <ImageScroll
        images={imageset3}
        marginRight={scale(20)}
        marginLeft={scale(20)}
        marginTop={scale(20)}
      />
      <ImageScroll
        images={imageset4}
        marginRight={scale(20)}
        marginLeft={scale(20)}
        marginTop={scale(20)}
        gap={scale(20)}
      />
    </SafeAreaView>
  );
};

export default AutoScrollExample;
