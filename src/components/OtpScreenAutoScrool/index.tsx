import React from 'react';
import {View, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import AutoScroll from '@homielab/react-native-auto-scroll';
import {scale} from 'react-native-size-matters';
import {hp, wp} from '../../constant/dimensions';

type ImageScrollProps = {
  images: ImageSourcePropType[];
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  gap?: number;
};

const ImageScroll = ({
  images,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  gap = scale(15),
}: ImageScrollProps) => {
  return (
    <AutoScroll duration={20000}>
      <View style={[styles.rowBase, {marginTop, marginLeft, marginRight}]}>
        {images.map((item, index) => (
          <View
            key={index}
            style={{
              marginLeft: index === 0 ? -scale(110) : gap,
            }}>
            <View style={styles.imageBox}>
              <Image source={item} style={styles.imageStyle} />
            </View>
          </View>
        ))}
      </View>
    </AutoScroll>
  );
};

export default ImageScroll;

const styles = StyleSheet.create({
  rowBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageBox: {
    backgroundColor: '#caf4fa',
    borderRadius: scale(20),
  },
  imageStyle: {
    height: wp(scale(20)),
    width: hp(scale(20)),
    resizeMode: 'contain',
  },
});
