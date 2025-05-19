import React from 'react';
import { Alert, SafeAreaView, View, StyleSheet } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { scale } from 'react-native-size-matters';
import HeaderComponent from '../../components/BackButtonCompoent/BackWithTitile';
import ResponsiveText from '../../components/ResponsiveText';
import { colors } from '../../styles/Colors';
import axios from 'axios';
import { ApiConfig } from '../../config/ApiConfig';
import { useForm } from 'react-hook-form';
import { SCREEN_NAME } from '../../constant/ScreenName';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './style';

type RootStackParamList = {
  [SCREEN_NAME.HOME_SCREEN]: undefined;
  OtpVerifyScreen: { PhoneNumber: string; id: string };
};

type OtpVerifyScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OtpVerifyScreen'
>;

interface RouteParams {
  PhoneNumber: string;
  id: string;
}

interface OtpVerifyScreenProps {
  navigation: OtpVerifyScreenNavigationProp;
  route: { params: RouteParams };
}

interface OtpFormData {
  otp: string;
}

const OtpVerifyScreen = ({ navigation, route }: OtpVerifyScreenProps) => {
  const { setValue, handleSubmit } = useForm<OtpFormData>();
  const { PhoneNumber: userPhone, id: userID } = route.params;

  const verifyOtp = async (data: OtpFormData) => {
    try {
      const response = await axios.post<{ status: number; data: { message?: string } }>(
        ApiConfig.OTP_VERIFY_OTP,
        {
          otp: data.otp,
          user_id: userID,
        }
      );
      if (response.status === 200) {
        navigation.navigate(SCREEN_NAME.HOME_SCREEN);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        Alert.alert('Error while verifying OTP', response?.data?.message ?? 'An error occurred');
      } else {
        Alert.alert('Error', 'An unexpected error occurred');
      }
    }
  };

  const handleChange = (text: string) => {
    if (text && text.length === 4) {
      setValue('otp', text);
      handleSubmit(verifyOtp)();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="OTP verification"
        IconName="arrow-back"
        IconType="Ionicons"
        navigation={navigation}
      />
      <View style={styles.contentContainer}>
        <ResponsiveText
          title="We've sent a verification code to "
          fontColor={colors.bgBlack}
          fontSize={16}
          fontWeight="400"
          fontStyle={styles.verificationText}
        />

        <ResponsiveText
          title={userPhone}
          fontColor={colors.black}
          fontWeight="500"
          fontStyle={styles.phoneText}
        />

        <View style={styles.otpContainer}>
          <OtpInput
            numberOfDigits={4}
            focusColor={colors.green}
            autoFocus={true}
            hideStick={true}
            placeholder=""
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            onFocus={() => console.log('Focused')}
            onBlur={() => console.log('Blurred')}
            onTextChange={handleChange}
            onFilled={(text) => console.log(`OTP is ${text}`)}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            textProps={{
              accessibilityRole: 'text',
              accessibilityLabel: 'OTP digit',
              allowFontScaling: false,
            }}
            theme={{
              pinCodeContainerStyle: styles.pinCodeContainer,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerifyScreen;


