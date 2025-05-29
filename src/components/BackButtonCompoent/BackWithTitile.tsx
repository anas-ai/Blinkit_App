import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import IconBars from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../styles/Colors';
import VectorIcon from '../CustomIcons';
import ResponsiveText from '../ResponsiveText';

const BackButtonHeader = ({
  navigation,
  title,
  IconName,
  IconSize,
  IconType,
}: any) => {
  const handleNavigatoin = () => {
    if (IconName === 'arrow-back') {
      navigation.goBack();
    } else {
      //   navigation.openDrawer();
      navigation.goBack();
    }
  };
  return (
    <View style={style.container}>
      <View style={style.contentStyle}>
        <VectorIcon
          type={IconType}
          name={IconName}
          size={IconSize}
          color={colors.bgBlack}
          onPress={handleNavigatoin}
        />

        <ResponsiveText
          title={title}
          fontSize={moderateScale(16)}
          fontColor={colors.bgBlack}
          fontWeight="500"
        />
      </View>
    </View>
  );
};

export default BackButtonHeader;

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: scale(100),
    width: '100%',
    elevation: scale(14),
    paddingBottom: scale(16),
  },
  contentStyle: {
    flex: 1,
    paddingHorizontal: scale(16),
    marginTop: scale(60),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
});
