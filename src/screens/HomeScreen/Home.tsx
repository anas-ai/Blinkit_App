import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/themed';
import React, { useState } from 'react';
import {
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { scale } from 'react-native-size-matters';
import VectorIcon from '../../components/CustomIcons';
import ResponsiveText from '../../components/ResponsiveText';
import { SCREEN_NAME } from '../../constant/ScreenName';
import TabBarNavigator from '../../navigators/TabBarNavigator';
import { useThemeStore } from '../../store/themeStore';
import { colors } from '../../styles/Colors';

const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const {resolvedTheme} = useThemeStore();
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <View style={{flex: 1}}>
      {Platform.OS === 'android' && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={isDarkMode ? 'light-content' : 'light-content'}
        />
      )}

      <ImageBackground
        resizeMode="cover"
        style={[
          styles.imgeBackGrondContainer,
          {backgroundColor: isDarkMode ? colors.black : colors.Olive_Green},
        ]}>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <ResponsiveText
              title="Blinkit in"
              fontSize={13}
              fontWeight="600"
              fontColor={colors.white}
            />

            <ResponsiveText
              title="8 minutes"
              fontColor={colors.white}
              fontWeight="bold"
              fontSize={30}
            />

            <View style={styles.addressStyle}>
              <ResponsiveText
                title="Home"
                fontColor={colors.white}
                fontWeight="500"
                fontSize={18}
              />

              <ResponsiveText
                title={`${'- Anas ,Pipli chowk '}`}
                fontColor={colors.white}
                fontSize={14}
              />

              <VectorIcon
                type="AntDesign"
                name="caretdown"
                size={14}
                color={colors.white}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.userWalletStyle}>
            <VectorIcon
              type="Ionicons"
              name="wallet"
              size={24}
              color="#FFA500"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: 8,
                borderRadius: scale(50),
              }}
            />
            <VectorIcon
              onPress={() =>
                navigation.navigate(SCREEN_NAME.PROFILE_SCREEN, {})
              }
              type="FontAwesome"
              name="user"
              size={24}
              color={colors.white}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: scale(8),
                borderRadius: scale(50),
                width: 40,
                textAlign: 'center',
              }}
            />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchItemContaienr}>
            <TouchableOpacity activeOpacity={0.8}>
              <VectorIcon type="Ionicons" name="search" />
            </TouchableOpacity>
            <TextInput
              placeholder="search here..."
              placeholderTextColor={colors.bgBlack}
              style={styles.searchInputStyle}
            />
            <Divider
              orientation="vertical"
              style={{borderColor: colors.black, marginRight: 10}}
            />
            <TouchableOpacity activeOpacity={0.6}>
              <VectorIcon type="MaterialIcons" name="keyboard-voice" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <TabBarNavigator />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  imgeBackGrondContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 30 : 0,
    overflow: 'hidden',
    paddingHorizontal: scale(14),
    paddingVertical: scale(20),
    backgroundColor: colors.Olive_Green,

  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scale(10),
  },
  userWalletStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  addressStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(5),
  },
  searchContainer: {marginTop: scale(18)},
  searchItemContaienr: {
    backgroundColor: colors.white,
    borderRadius: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingVertical: scale(8),
  },
  searchInputStyle: {
    flex: 1,
    marginHorizontal: scale(10),
    paddingVertical: scale(4),
    paddingHorizontal: scale(8),
    alignItems: 'center',
    color: colors.graytextColor,
  },
});
