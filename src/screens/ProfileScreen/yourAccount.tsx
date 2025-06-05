import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {scale, verticalScale} from 'react-native-size-matters';
import VectorIcon, {IconType} from '../../components/CustomIcons';
import ResponsiveText from '../../components/ResponsiveText';
import {SCREEN_NAME} from '../../constant/ScreenName';
import {colors} from '../../styles/Colors';
import {IMG_PNG} from '../../constant/ImagesName';
import CustomButton from '../../components/ButtonComponent/ButtonCustom';

type DataTypes = {
  title: string;
  Icon: string;
  IconType: IconType;
  navigation: unknown;
};

const YourAccount = () => {
  const navigation = useNavigation<any>();
  const appVersion = DeviceInfo.getVersion();

  const YOUR_INFORMATION: DataTypes[] = [
    {
      title: 'Your orders',
      Icon: 'wallet',
      IconType: 'AntDesign',
      navigation: undefined,
    },
    {
      title: 'Bookmarked recipes',
      Icon: 'wallet',
      IconType: 'AntDesign',
      navigation: undefined,
    },
    {
      title: 'Address book',
      Icon: 'wallet',
      IconType: 'AntDesign',
      navigation: undefined,
    },
    {
      title: 'GST details',
      Icon: 'wallet',
      IconType: 'AntDesign',
      navigation: undefined,
    },
    {
      title: 'E-Gift Cards',
      Icon: 'wallet',
      IconType: 'AntDesign',
      navigation: undefined,
    },
  ];

  const SUPPORT_DATA: DataTypes[] = [
    {
      title: 'Blinkit Money',
      Icon: 'wallet',
      IconType: 'AntDesign',
      navigation: undefined,
    },
    {
      title: 'Support',
      Icon: 'message-reply-text-outline',
      IconType: 'MaterialCommunityIcons',
      navigation: undefined,
    },
    {
      title: 'Payments',
      Icon: 'creditcard',
      IconType: 'AntDesign',
      navigation: undefined,
    },
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
      navigation: '',
    },
    {
      title: 'About Us',
      Icon: 'infocirlceo',
      IconType: 'AntDesign',
      navigation: '',
    },

    {
      title: 'Account privacy',
      Icon: 'lock',
      IconType: 'AntDesign',
      navigation: '',
    },
    {
      title: 'Notificatoin preferences',
      Icon: 'notifications-outline',
      IconType: 'Ionicons',
      navigation: '',
    },
    {
      title: 'Log out',
      Icon: 'logout',
      IconType: 'MaterialCommunityIcons',
      navigation: '',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeaderStyles}>
        <ResponsiveText
          title="Your account"
          fontColor={colors.black}
          fontWeight="bold"
          fontSize={28}
        />
        <View style={styles.YourAccountStyle}>
          <View style={styles.PhoneNumberContainer}>
            <VectorIcon
              type="MaterialCommunityIcons"
              name="phone-outline"
              color={colors.bgBlack}
              size={18}
            />
            <ResponsiveText
              title="8949217986"
              fontColor={colors.darkGray}
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
              fontColor={colors.black}
              fontSize={16}
              fontWeight="bold"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ImageBGContainer}>
          <ImageBackground
            source={IMG_PNG.BRITHDAY_BG}
            resizeMode="cover"
            style={{
              height: scale(70),
              width: '100%',
            }}>
            <View style={{padding: scale(16)}}>
              <ResponsiveText
                title="Add your birthday"
                fontColor={colors.black}
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
                type={item?.IconType}
                name={item?.Icon}
                color={colors.DarkerTone}
              />
              <ResponsiveText
                title={item?.title}
                fontColor={colors.black}
                fontWeight="500"
                fontSize={13}
                fontStyle={{marginTop: scale(6)}}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View>
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
                {
                  paddingTop: index === 0 ? scale(0) : scale(10),
                },
              ]}
              onPress={() =>
                item.navigation && navigation.navigate(item.navigation)
              }>
              <View style={styles.iconTextContainer}>
                <View style={styles.iconContainer}>
                  <VectorIcon
                    type={item?.IconType}
                    name={item?.Icon}
                    size={20}
                    color={colors.black}
                  />
                </View>

                <ResponsiveText
                  title={item?.title}
                  fontSize={16}
                  fontColor={colors.bgBlack1}
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
        </View>

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
              {
                paddingTop: index === 0 ? scale(0) : scale(10),
              },
            ]}
            onPress={() =>
              item.navigation && navigation.navigate(item.navigation)
            }>
            <View style={styles.iconTextContainer}>
              <View style={styles.iconContainer}>
                <VectorIcon
                  type={item?.IconType}
                  name={item?.Icon}
                  size={20}
                  color={colors.bgBlack}
                />
              </View>

              <ResponsiveText
                title={item?.title}
                fontColor={colors.black}
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

        <View>
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
                {
                  paddingTop: index === 0 ? scale(0) : scale(10),
                },
              ]}
              onPress={() =>
                item.navigation && navigation.navigate(item.navigation)
              }>
              <View style={styles.iconTextContainer}>
                <View style={styles.iconContainer}>
                  <VectorIcon
                    type={item?.IconType}
                    name={item?.Icon}
                    size={20}
                    color={colors.black}
                  />
                </View>

                <ResponsiveText
                  title={item?.title}
                  fontSize={16}
                  fontColor={colors.bgBlack1}
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
        </View>

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
    backgroundColor: colors.white,
    marginTop: scale(1),
  },
  stickyHeaderStyles: {
    backgroundColor: colors.white,
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
    color: colors.black,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  ImageBGContainer: {
    borderRadius: scale(16),
    overflow: 'hidden',
    marginTop: scale(12),
  },
});
