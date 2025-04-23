import {View, Text} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {ResponsiveTextTypes} from '../../constant/types';

const ResponsiveText: React.FC<ResponsiveTextTypes> = ({
  title = '',
  fontSize,
  fontColor,
  fontWeight,
  fontStyle,
}) => {
  return (
    <Text
      style={{
        color: fontColor,
        fontWeight: fontWeight,
        fontSize: moderateScale(fontSize || 14),
        ...fontStyle,
      }}>
      {title}
    </Text>
  );
};

export default ResponsiveText;
