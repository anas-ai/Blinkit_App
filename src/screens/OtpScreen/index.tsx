import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import ImageScroll from '../../components/OtpScreenAutoScrool';
import ResponsiveText from '../../components/ResponsiveText';
import {
  imageset1,
  imageset2,
  imageset3,
  imageset4,
  IMG_PNG,
} from '../../constant/ImagesName';
import {colors, lightColors} from '../../styles/Colors';
import PhoneInput, {ICountry} from 'react-native-international-phone-number';
import CustomButton from '../../components/ButtonComponent/ButtonCustom';
import LinearGradient from 'react-native-linear-gradient';
import StatusBarComponent from '../../components/StatusBarComponent/StatusBarComponent';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {phoneSchema} from '../../schema/zodSchema';
import {SCREEN_NAME} from '../../constant/ScreenName';
import {ApiConfig} from '../../config/ApiConfig';
import axios from 'axios';
import {saveToStorage} from '../../utils/MmkvStorageHelper';
const AutoScrollExample = (props: any) => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(phoneSchema),
    mode: 'onSubmit',
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const number = data.phone;
      const phone = `+91 ${number}`;
      console.log('Sending OTP to:', phone);
      const response = await axios.post(ApiConfig.SEND_OTP, {phone});
      if (response?.status === 201) {
        const otpCode = response?.data?.data?.otp?.code;
        const PhoneNumber = response?.data?.data?.phone
        const userId = response?.data?.data?._id;
        console.log(userId,'userid')
        props.navigation.navigate(SCREEN_NAME.OTP_VERIFY_SCREEN, {
          otpCode:otpCode,
          id:userId,
          PhoneNumber:PhoneNumber
        });
      }
    } catch (error: any) {
      console.error(
        'Failed to send OTP:',
        error.response?.data || error.message,
      );
    } finally {
      setLoading(false);
    }
  };

  const bottomColors = [...lightColors].reverse();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBarComponent hidden={true} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={scale(30)}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
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

          <LinearGradient
            colors={bottomColors}
            style={{paddingTop: 10, width: '100%'}}
          />

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}>
            <View>
              <Image
                source={IMG_PNG.LOGO_PNG}
                style={{
                  resizeMode: 'contain',
                  height: scale(70),
                  width: scale(70),
                  borderRadius: scale(20),
                }}
              />
            </View>
            <ResponsiveText
              title="India's last minute app"
              fontSize={30}
              fontWeight="bold"
              fontStyle={{marginTop: scale(10)}}
              fontColor={colors.black}
            />
            <ResponsiveText
              title="Log in or Sign Up"
              fontSize={16}
              fontWeight="bold"
              fontColor={colors.bgBlack}
            />

            {/* Phone Input with Controller */}
            <Controller
              name="phone"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <PhoneInput
                  onBlur={onBlur}
                  value={value}
                  onChangePhoneNumber={phone => {
                    const cleaned = phone.trimStart().replace(/[^\d]/g, '');
                    onChange(cleaned); // Send only clean digits to form state
                  }}
                  selectedCountry={selectedCountry}
                  onChangeSelectedCountry={setSelectedCountry}
                  phoneInputStyles={{
                    container: {
                      width: '85%',
                      marginTop: scale(18),
                    },
                    input: {
                      color: colors.black,
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                      fontSize: scale(12),
                      right: scale(22),
                    },
                    flagContainer: {
                      backgroundColor: colors.white,
                    },
                  }}
                  modalStyles={{
                    modal: {
                      padding: scale(18),
                      paddingHorizontal: scale(10),
                    },
                  }}
                />
              )}
            />
            {errors?.phone && (
              <ResponsiveText
                title={errors.phone.message}
                fontColor={colors.red}
                fontSize={10}
                fontStyle={{marginLeft: 10}}
              />
            )}

            <CustomButton
              loading={loading}
              onPress={handleSubmit(onSubmit)}
              title="Continue"
              buttonStyle={{
                width: scale(300),
                backgroundColor: colors.Olive_Green,
                marginTop: scale(20),
                paddingVertical: scale(14),
                borderRadius: scale(14),
              }}
              titleStyle={{fontSize: scale(14), fontWeight: 'bold'}}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AutoScrollExample;
