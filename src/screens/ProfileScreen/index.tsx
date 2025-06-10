import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import BackButtonHeader from '../../components/BackButtonCompoent/BackWithTitile';
import StatusBarComponet from '../../components/StatusBarComponent/StatusBarComponet';
import YourAccount from './yourAccount';
import { useThemeStore } from '../../store/themeStore';

type navigationProps = {
  navigation: NavigationProp<any>;
};

const ProfileIndex = ({navigation}: navigationProps) => {
  const {resolvedTheme} = useThemeStore();
  const isDarkMode = resolvedTheme === 'dark'
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBarComponet
        barStyle={isDarkMode?"light-content":"dark-content"}
        backgroundColor="transparent"
      />
      <BackButtonHeader
        title="Profile"
        IconName="arrow-back"
        IconType="Ionicons"
        navigation={navigation}
        
      />
      <YourAccount />
    </SafeAreaView>
  );
};

export default ProfileIndex;
