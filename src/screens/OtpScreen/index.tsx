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
import {colors} from '../../styles/Colors';
import PhoneInput, {ICountry} from 'react-native-international-phone-number'; // ✅ import ICountry
import CustomButton from '../../components/ButtonComponent/ButtonCustom';

const AutoScrollExample = () => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null); // ✅ correct typing
  const [inputValue, setInputValue] = useState<string>(''); // ✅ strong typing

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
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

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
              paddingTop: scale(12),
              flex:1,
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

            <PhoneInput
              value={inputValue}
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
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

            <CustomButton
              title="Countinue"
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
