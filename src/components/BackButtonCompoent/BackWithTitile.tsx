import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import IconBars from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../styles/Colors';
import VectorIcon from '../CustomIcons';
import ResponsiveText from '../ResponsiveText';
import {useThemeStore} from '../../store/themeStore';

const BackButtonHeader = ({
  navigation,
  title,
  IconName,
  IconSize,
  IconType,
  themeIcon,
  ThemeColor
}: any) => {
  const {resolvedTheme, setMode} = useThemeStore();
  const isDarkMode = resolvedTheme === 'dark';

  const handleNavigatoin = () => {
    if (IconName === 'arrow-back') {
      navigation.goBack();
    } else {
      //   navigation.openDrawer();
      navigation.goBack();
    }
  };

  const toggleMode = () => {
    setMode(isDarkMode ? 'light' : 'dark');
  };
  return (
    <View
      style={[
        style.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <View style={style.contentStyle}>
        <View style={style.headerContentContaienr}>
          <VectorIcon
            type={IconType}
            name={IconName}
            size={IconSize}
            color={isDarkMode ? colors.white : colors.bgBlack}
            onPress={handleNavigatoin}
          />

          <ResponsiveText
            title={title}
            fontSize={moderateScale(16)}
            fontColor={isDarkMode ? colors.white : colors.black}
            fontWeight="500"
          />
        </View>
        <VectorIcon
          onPress={toggleMode}
          type="Entypo"
          name={themeIcon}
          color={ThemeColor}
          size={30}
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
  headerContentContaienr: {
    flexDirection: 'row',
    gap: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentStyle: {
    flex: 1,
    paddingHorizontal: scale(16),
    marginTop: scale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
