import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import {scale} from 'react-native-size-matters';
import HeaderComponent from '../../components/BackButtonCompoent/BackWithTitile';
import ResponsiveText from '../../components/ResponsiveText';
import {colors} from '../../styles/Colors';

const OtpVerifyScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <HeaderComponent
        title="OTP verification"
        IconName="arrow-back"
        IconType="Ionicons"
        navigation={navigation}
      />
      <View style={{flex: 1, alignItems: 'center', paddingTop: scale(20)}}>
        <ResponsiveText
          title="We've sent a verificaiton code  to "
          fontColor={colors.bgBlack}
          fontSize={16}
          fontWeight="400"
          fontStyle={{paddingVertical:scale(20)}}
        />

        <ResponsiveText
          title={`+91${8888888888}`}
          fontColor={colors.black}
          fontWeight="500"
          fontStyle={{marginBottom:scale(20)}}
        />
        <View style={{width: '80%'}}>
          <OtpInput
            numberOfDigits={6}
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
            onTextChange={text => console.log(text)}
            onFilled={text => console.log(`OTP is ${text}`)}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            textProps={{
              accessibilityRole: 'text',
              accessibilityLabel: 'OTP digit',
              allowFontScaling: false,
            }}

             theme={{
          pinCodeContainerStyle: {
            borderWidth: 1.5,
            borderRadius: 10,
            borderColor:  colors.shadow,
          },
        }}
           
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerifyScreen;
