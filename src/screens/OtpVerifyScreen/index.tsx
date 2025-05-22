import React, {useCallback, useEffect, useState} from 'react';
import {Alert, SafeAreaView, View, ActivityIndicator} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {OtpInput} from 'react-native-otp-entry';

import HeaderComponent from '../../components/BackButtonCompoent/BackWithTitile';
import ResponsiveText from '../../components/ResponsiveText';
import {ApiConfig} from '../../config/ApiConfig';
import {SCREEN_NAME} from '../../constant/ScreenName';
import {colors} from '../../styles/Colors';
import {styles} from './style';
import {
  getStringFromStorage,
  saveToStorage,
} from '../../utils/MmkvStorageHelper';
import useAuth from '../../hooks/useAuth';

type RootStackParamList = {
  [SCREEN_NAME.HOME_SCREEN]: undefined;
  OtpVerifyScreen: {PhoneNumber: string; id: string};
};

type OtpVerifyScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OtpVerifyScreen'
>;

type OtpVerifyRouteProp = RouteProp<RootStackParamList, 'OtpVerifyScreen'>;

interface OtpVerifyScreenProps {
  navigation: OtpVerifyScreenNavigationProp;
  route: OtpVerifyRouteProp;
}

interface OtpFormData {
  otp: string;
}

const OtpVerifyScreen: React.FC<OtpVerifyScreenProps> = ({
  navigation,
  route,
}) => {
  const {PhoneNumber: userPhone, id: userID} = route.params;

  const [loading, setLoading] = useState(false);
  const [secondLeft, setSecondsLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const {login} = useAuth()

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!canResend) {
      interval = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [canResend]);

  const {setValue, handleSubmit, register} = useForm<OtpFormData>({
    defaultValues: {otp: ''},
  });

  useEffect(() => {
    register('otp', {
      required: 'OTP is required',
      minLength: {value: 4, message: 'OTP must be 4 digits'},
      maxLength: {value: 4, message: 'OTP must be 4 digits'},
    });
  }, [register]);

  const verifyOtp = useCallback(
    async (data: OtpFormData) => {
      try {
        setLoading(true);
        const response = await axios.post<{
          accessToken: any;
          status: number;
          data: {message?: string};
        }>(ApiConfig.OTP_VERIFY_OTP, {
          otp: data.otp,
          user_id: userID,
        });
        console.log(response.data, 'rjkdjkd');
        // if (response.status === 200) {
        //   navigation.navigate(SCREEN_NAME.HOME_SCREEN);
        // }
        const token = response.data?.accessToken;
        login(token)
        const getToken = getStringFromStorage('token');
        console.log(getToken, 'getYkkk');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const message = error.response?.data?.message || 'An error occurred';
          Alert.alert('OTP Verification Failed', message);
        } else {
          Alert.alert('Error', 'An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    },
    [navigation, userID],
  );

  const handleChange = useCallback(
    (text: string) => {
      if (text.length === 4) {
        setValue('otp', text);
        handleSubmit(verifyOtp)();
      }
    },
    [handleSubmit, setValue, verifyOtp],
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="OTP Verification"
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
            autoFocus
            hideStick
            placeholder=""
            blurOnFilled
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            onFocus={() => console.log('Focused')}
            onBlur={() => console.log('Blurred')}
            onTextChange={handleChange}
            textInputProps={{accessibilityLabel: 'One-Time Password'}}
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
        {loading && (
          <View style={{marginTop: 20}}>
            <ActivityIndicator size="large" color={colors.green} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OtpVerifyScreen;
