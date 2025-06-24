import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import DeviceInfo from 'react-native-device-info';
import {scale} from 'react-native-size-matters';
import VectorIcon, {IconType} from '../../components/CustomIcons';
import ResponsiveText from '../../components/ResponsiveText';
import {IMG_PNG} from '../../constant/ImagesName';
import {SCREEN_NAME} from '../../constant/ScreenName';
import useAuth from '../../hooks/useAuth';
import {colors} from '../../styles/Colors';
import {useThemeStore} from '../../store/themeStore';
import {Switch} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';

type DataTypes = {
  title: string;
  Icon: string;
  IconType: IconType;
  navigation?: string | null;
  onPress?: () => void;
};

const YourAccount = () => {
  const navigation = useNavigation<any>();
  const appVersion = DeviceInfo.getVersion();
  const {logout} = useAuth();

  const {resolvedTheme, setMode} = useThemeStore();
  const isDarkMode = resolvedTheme === 'dark';

  const handleLogout = async () => {
    await logout();
  };

  const YOUR_INFORMATION: DataTypes[] = [
    {title: 'Your orders', Icon: 'wallet', IconType: 'AntDesign'},
    {title: 'Bookmarked recipes', Icon: 'wallet', IconType: 'AntDesign'},
    {title: 'Address book', Icon: 'wallet', IconType: 'AntDesign'},
    {title: 'GST details', Icon: 'wallet', IconType: 'AntDesign'},
    {title: 'E-Gift Cards', Icon: 'wallet', IconType: 'AntDesign'},
  ];

  const SUPPORT_DATA: DataTypes[] = [
    {title: 'Blinkit Money', Icon: 'wallet', IconType: 'AntDesign'},
    {
      title: 'Support',
      Icon: 'message-reply-text-outline',
      IconType: 'MaterialCommunityIcons',
    },
    {title: 'Payments', Icon: 'creditcard', IconType: 'AntDesign'},
  ];

  const PAYMENT_DATA: DataTypes[] = [
    {
      title: 'Wallet',
      Icon: 'wallet',
      IconType: 'AntDesign',
      navigation: SCREEN_NAME.BLINKIT_MONEY_SCREEN,
    },
    {
      title: 'Blinkit Money',
      Icon: 'wallet',
      IconType: 'AntDesign',
      navigation: null,
    },
    {
      title: 'Payment settings',
      Icon: 'payment',
      IconType: 'MaterialIcons',
      navigation: '',
    },
    {
      title: 'Your collected rewards',
      Icon: 'tag',
      IconType: 'EvilIcons',
      navigation: '',
    },
  ];

  const OTHER_INFORMATION_DATA: DataTypes[] = [
    {
      title: 'Share the app',
      Icon: 'share-outline',
      IconType: 'MaterialCommunityIcons',
    },
    {title: 'About Us', Icon: 'infocirlceo', IconType: 'AntDesign'},
    {title: 'Account privacy', Icon: 'lock', IconType: 'AntDesign'},
    {
      title: 'Notification preferences',
      Icon: 'notifications-outline',
      IconType: 'Ionicons',
    },
    {
      title: 'Log out',
      Icon: 'logout',
      IconType: 'MaterialCommunityIcons',
      onPress: handleLogout,
    },
  ];

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.bgBlack : colors.white},
      ]}>
      <View
        style={[
          styles.stickyHeaderStyles,
          {
            backgroundColor: isDarkMode ? colors.bgBlack : colors.white,
            borderBottomColor: isDarkMode ? colors.bgBlack : colors.white,
          },
        ]}>
        <ResponsiveText
          title="Your account"
          fontColor={isDarkMode ? colors.white : colors.black}
          fontWeight="bold"
          fontSize={28}
        />

        <View style={styles.YourAccountStyle}>
          <View style={styles.PhoneNumberContainer}>
            <VectorIcon
              type="MaterialCommunityIcons"
              name="phone-outline"
              color={isDarkMode ? colors.white : colors.bgBlack}
              size={18}
            />
            <ResponsiveText
              title="8949217986"
              fontColor={isDarkMode ? colors.lightGray : colors.darkGray}
              fontSize={14}
              fontWeight="500"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate(SCREEN_NAME.EDIT_PROFILE_SCREEN)
            }>
            <ResponsiveText
              title="Edit"
              fontColor={isDarkMode ? colors.white : colors.black}
              fontSize={16}
              fontWeight="bold"
            />
          </TouchableOpacity>
        </View>

        {/* <Switch
          value={isDarkMode}
          onValueChange={value => setMode(value ? 'dark' : 'light')}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        /> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ImageBGContainer}>
          <ImageBackground
            source={IMG_PNG.BRITHDAY_BG}
            resizeMode="cover"
            style={{height: scale(70), width: '100%'}}>
            <View style={{padding: scale(16)}}>
              <ResponsiveText
                title="Add your birthday"
                fontColor={isDarkMode ? colors.white : colors.black}
                fontWeight="bold"
              />
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <ResponsiveText
                  title="Enter details"
                  fontColor="#387628"
                  fontWeight="bold"
                />
                <VectorIcon
                  type="Entypo"
                  name="triangle-right"
                  color="#387628"
                  size={18}
                  style={{marginTop: 4}}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={{flexDirection: 'row', gap: scale(10)}}>
          {SUPPORT_DATA.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={{
                height: scale(100),
                width: scale(100),
                borderWidth: 1,
                borderColor: colors.lightpurple,
                marginTop: scale(20),
                borderRadius: scale(10),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <VectorIcon
                type={item.IconType}
                name={item.Icon}
                color={isDarkMode ? colors.white : colors.black}
              />
              <ResponsiveText
                title={item.title}
                fontColor={isDarkMode ? colors.white : colors.black}
                fontWeight="500"
                fontSize={13}
                fontStyle={{marginTop: scale(6)}}
              />
            </TouchableOpacity>
          ))}
        </View>

        <ResponsiveText
          title="YOUR INFORMATION"
          fontSize={14}
          fontColor={colors.darkGray}
          fontWeight="500"
          fontStyle={{paddingVertical: scale(20)}}
        />

        {YOUR_INFORMATION.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={[
              styles.YourAccountContentContainer,
              {paddingTop: index === 0 ? scale(0) : scale(10)},
            ]}
            onPress={() =>
              item.navigation && navigation.navigate(item.navigation!)
            }>
            <View style={styles.iconTextContainer}>
              <View style={styles.iconContainer}>
                <VectorIcon
                  type={item.IconType}
                  name={item.Icon}
                  size={20}
                  color={colors.black}
                />
              </View>
              <ResponsiveText
                title={item.title}
                fontSize={16}
                fontColor={isDarkMode ? colors.white : colors.black}
                fontWeight="500"
                fontStyle={styles.textStyle}
              />
            </View>
            <VectorIcon
              type="AntDesign"
              name="right"
              color={colors.darkGray}
              size={20}
            />
          </TouchableOpacity>
        ))}

        <ResponsiveText
          title="PAYMENTS AND COUPONS"
          fontSize={14}
          fontColor={colors.darkGray}
          fontWeight="500"
          fontStyle={{paddingVertical: scale(20)}}
        />

        {PAYMENT_DATA.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={[
              styles.YourAccountContentContainer,
              {paddingTop: index === 0 ? scale(0) : scale(10)},
            ]}
            onPress={() =>
              item.navigation && navigation.navigate(item.navigation!)
            }>
            <View style={styles.iconTextContainer}>
              <View style={styles.iconContainer}>
                <VectorIcon
                  type={item.IconType}
                  name={item.Icon}
                  size={20}
                  color={colors.bgBlack}
                />
              </View>
              <ResponsiveText
                title={item.title}
                fontColor={isDarkMode?colors.white:colors.black}
                fontWeight="400"
                fontStyle={styles.textStyle}
              />
            </View>
            <VectorIcon
              type="AntDesign"
              name="right"
              color={colors.darkGray}
              size={20}
            />
          </TouchableOpacity>
        ))}

        <ResponsiveText
          title="OTHER INFORMATION"
          fontSize={14}
          fontColor={colors.darkGray}
          fontWeight="500"
          fontStyle={{paddingVertical: scale(20)}}
        />

        {OTHER_INFORMATION_DATA.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={[
              styles.YourAccountContentContainer,
              {paddingTop: index === 0 ? scale(0) : scale(10)},
            ]}
            onPress={() => {
              if (item.onPress) {
                item.onPress();
              } else if (item.navigation) {
                navigation.navigate(item.navigation);
              }
            }}>
            <View style={styles.iconTextContainer}>
              <View style={styles.iconContainer}>
                <VectorIcon
                  type={item.IconType}
                  name={item.Icon}
                  size={20}
                  color={colors.black}
                />
              </View>
              <ResponsiveText
                title={item.title}
                fontSize={16}
                fontColor={isDarkMode ? colors.white : colors.bgBlack1}
                fontWeight="500"
                fontStyle={styles.textStyle}
              />
            </View>
            <VectorIcon
              type="AntDesign"
              name="right"
              color={colors.darkGray}
              size={20}
            />
          </TouchableOpacity>
        ))}

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: scale(40),
            paddingBottom: scale(30),
          }}>
          <ResponsiveText
            title="blinkit"
            fontColor={colors.graytextColor}
            fontSize={25}
            fontWeight="600"
          />
          <ResponsiveText
            title={` v ${appVersion}`}
            fontColor={colors.graytextColor}
            fontWeight="500"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default YourAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: scale(12),
    paddingHorizontal: scale(14),
    marginTop: scale(1),
  },
  stickyHeaderStyles: {
    paddingHorizontal: scale(14),
    paddingBottom: scale(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    zIndex: 1,
  },
  YourAccountStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(10),
  },
  PhoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  YourAccountContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(20),
  },
  iconContainer: {
    backgroundColor: colors.lightGray,
    padding: scale(4),
    alignItems: 'center',
    borderRadius: scale(20),
    alignSelf: 'flex-start',
    borderWidth: scale(1),
    borderColor: colors.greyColor + '33',
  },
  textStyle: {
    fontSize: scale(15),
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  ImageBGContainer: {
    borderRadius: scale(16),
    overflow: 'hidden',
    marginTop: scale(12),
  },
});
