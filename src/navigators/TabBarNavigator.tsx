import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../styles/Colors';
import VectorIcon from '../components/CustomIcons';
import ResponsiveText from '../components/ResponsiveText';
import {useThemeStore} from '../store/themeStore';

const data = [{key: 'tabOne'}, {key: 'tabTwo'}];

const Tab = createMaterialTopTabNavigator();
const TabBarNavigator = () => {
  const {resolvedTheme} = useThemeStore();
  const isDarkMode = resolvedTheme === 'dark';

  const CombinedTabsFlatList = () => {
    const renderItem = ({item}: {item: {key: string}}) => {
      if (item.key === 'tabOne') return <TabOne />;
      if (item.key === 'tabTwo') return <TabTwo />;
      return null;
    };
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    );
  };

  const TabOne = () => (
    <View style={styles.center}>
      <Text style={{color: isDarkMode ? colors.white : colors.bgBlack}}>
        Tab One Content
      </Text>
    </View>
  );

  const TabTwo = () => (
    <ScrollView contentContainerStyle={styles.center}>
      <View>
        <Text style={{}}>Tab Two Content</Text>
      </View>
    </ScrollView>
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          let iconName = '';
          let label = '';

          if (route.name === 'TabOne') {
            iconName = focused ? 'home' : 'home';
            label = 'All';
          } else if (route.name === 'TabTwo') {
            iconName = focused ? 'user' : 'user-o';
            label = 'Summer';
          }
          return (
            <View style={{alignItems: 'center'}}>
              <VectorIcon
                type="FontAwesome"
                name={iconName}
                size={20}
                color={focused ? colors.white : colors.white}
              />
              <ResponsiveText title={label} />
            </View>
          );
        },
        tabBarIndicatorStyle: {
          backgroundColor: isDarkMode ? colors.white : colors.black,
        },
        tabBarStyle: {
          backgroundColor: isDarkMode ? colors.bgBlack : colors.Olive_Green,
        },
      })}>
      <Tab.Screen name="TabOne" component={TabOne} />
      <Tab.Screen name="TabTwo" component={TabTwo} />
    </Tab.Navigator>
  );
};

export default TabBarNavigator;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
