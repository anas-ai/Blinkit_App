import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Alert,
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
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {phoneSchema} from '../../schema/zodSchema';
import {SCREEN_NAME} from '../../constant/ScreenName';
import {ApiConfig} from '../../config/ApiConfig';
import axios from 'axios';
import { styles } from './styles';
import StatusBarComponent from '../../components/StatusBarComponent/StatusBarComponet';

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
      const response = await axios.post(ApiConfig.SEND_OTP, {phone});
      if (response?.status === 201) {
        const {otp, phone: PhoneNumber, _id: id} = response.data.data;
        props.navigation.navigate(SCREEN_NAME.OTP_VERIFY_SCREEN, {
          otpCode: otp?.code,
          id,
          PhoneNumber,
        });
      }
    } catch (error: any) {
      console.error('Failed to send OTP:', error.response?.data || error.message);
      Alert.alert(error.response?.data?.message)
    } finally {
      setLoading(false);
    }
  };

  const bottomColors = [...lightColors].reverse();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBarComponent hidden={false}  barStyle='dark-content' backgroundColor='transparent' />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={scale(30)}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="always">
          {[imageset1, imageset2, imageset3, imageset4].map((images, index) => (
            <ImageScroll
              key={index}
              images={images}
              marginLeft={scale(20)}
              marginRight={scale(20)}
              marginTop={index === 0 ? scale(40) : scale(20)}
              gap={index % 2 !== 0 ? scale(20) : undefined}
            />
          ))}

          <LinearGradient colors={bottomColors} style={styles.linearGradient} />

          <View style={styles.centeredView}>
            <Image source={IMG_PNG.LOGO_PNG} style={styles.logo} />

            <ResponsiveText
              title="India's last minute app"
              fontSize={30}
              fontWeight="bold"
              fontStyle={styles.headingText}
              fontColor={colors.black}
            />
            <ResponsiveText
              title="Log in or Sign Up"
              fontSize={16}
              fontWeight="bold"
              fontColor={colors.bgBlack}
            />

            <Controller
              name="phone"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <PhoneInput
                  onBlur={onBlur}
                  value={value}
                  onChangePhoneNumber={phone => {
                    const cleaned = phone.trimStart().replace(/[^\d]/g, '');
                    onChange(cleaned);
                  }}
                  selectedCountry={selectedCountry}
                  onChangeSelectedCountry={setSelectedCountry}
                  phoneInputStyles={{
                    container: styles.phoneInputContainer,
                    input: styles.phoneInput,
                    flagContainer: styles.flagContainer,
                  }}
                  modalStyles={{
                    modal: styles.modal,
                  }}
                />
              )}
            />
            {errors?.phone && (
              <ResponsiveText
                title={errors.phone.message}
                fontColor={colors.red}
                fontSize={10}
                fontStyle={styles.errorText}
              />
            )}

            <CustomButton
              loading={loading}
              onPress={handleSubmit(onSubmit)}
              title="Continue"
              buttonStyle={styles.continueButton}
              titleStyle={styles.buttonTitle}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default AutoScrollExample;