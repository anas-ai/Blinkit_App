import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/GlobalStyle';
import StatusBarComponet from '../../components/StatusBarComponent/StatusBarComponet';
import HeaderComponent from '../../components/BackButtonCompoent/BackWithTitile';
import {colors} from '../../styles/Colors';
import {NavigationProp} from '@react-navigation/native';
import BackButtonHeader from '../../components/BackButtonCompoent/BackWithTitile';
import ResponsiveText from '../../components/ResponsiveText';
import {scale} from 'react-native-size-matters';
import VectorIcon from '../../components/CustomIcons';

type navigationProps = {
  navigation: NavigationProp<any>;
};

const ProfileIndex = ({navigation}: navigationProps) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBarComponet
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <BackButtonHeader
        title="Profile"
        IconName="arrow-back"
        IconType="Ionicons"
        navigation={navigation}
      />

      <View style={styles.contaienr}>
        <ResponsiveText
          title="Your account"
          fontColor={colors.black}
          fontWeight="bold"
          fontSize={26}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.PhoneNunberContaienr}>
            <VectorIcon
              type="MaterialCommunityIcons"
              name="phone-outline"
              color={colors.bgBlack}
              size={18}
            />
            <ResponsiveText
              title={`${8949217986}`}
              fontColor={colors.bgBlack}
              fontSize={13}
              fontStyle={{}}
              fontWeight="bold"
            />
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <ResponsiveText
              title="Edit"
              fontColor={colors.black}
              fontSize={16}
              fontWeight="bold"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileIndex;

const styles = StyleSheet.create({
  contaienr: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(14),
    backgroundColor: colors.white,
    flex: 1,
    marginTop: 1,
  },
  PhoneNunberContaienr: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6),
    paddingTop: scale(4),
  },
});
