import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../styles/Colors';
import VectorIcon from '../components/CustomIcons';
import ResponsiveText from '../components/ResponsiveText';
import {useThemeStore} from '../store/themeStore';
import {scale} from 'react-native-size-matters';
import AllTab from '../TopTabs/AllTab';

const data = [
  {key: 'tabOne'},
  {key: 'tabTwo'},
  {key: 'tabThree'},
  {key: 'tabFour'},
];

const Tab = createMaterialTopTabNavigator();
const TabBarNavigator = () => {
  const {resolvedTheme} = useThemeStore();
  const isDarkMode = resolvedTheme === 'dark';

  const renderItem = ({item}: {item: {key: string}}) => {
    if (item.key === 'tabOne') return <AllTab />;
    else if (item.key === 'tabTwo') return <TabTwo />;
    else if (item.key === 'tabThree') return <TabThree />;
    else if (item.key === 'tabFour') return <TabFour />;
    return null;
  };
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.key}
  />;

  const TabTwo = () => (
    <ScrollView contentContainerStyle={styles.center}>
      <View>
        <Text style={{color: isDarkMode ? colors.white : colors.bgBlack}}>
          Tab Two Content
        </Text>
      </View>
    </ScrollView>
  );
  const TabThree = () => (
    <ScrollView contentContainerStyle={styles.center}>
      <View>
        <Text style={{color: isDarkMode ? colors.white : colors.bgBlack}}>
          Tab Two Content
        </Text>
      </View>
    </ScrollView>
  );
  const TabFour = () => (
    <ScrollView contentContainerStyle={styles.center}>
      <View>
        <Text style={{color: isDarkMode ? colors.white : colors.bgBlack}}>
          Tab Two Content
        </Text>
      </View>
    </ScrollView>
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarPressColor: isDarkMode?colors.black:colors.Olive_Green,
        tabBarPressOpacity: 1,
        tabBarLabel: ({focused}) => {
          let iconName = '';
          let label = '';

          if (route.name === 'TabOne') {
            iconName = focused ? 'home' : 'home';
            label = 'All';
          } else if (route.name === 'TabTwo') {
            iconName = focused ? 'user' : 'user-o';
            label = 'Summer';
          } else if (route.name === 'TabThree') {
            iconName = focused ? 'user' : 'user-o';
            label = 'Summer';
          } else if (route.name === 'TabFour') {
            iconName = focused ? 'user' : 'user-o';
            label = 'Summer';
          }
          return (
            <View style={{alignItems: 'center'}}>
              <VectorIcon
                type="FontAwesome"
                name={iconName}
                size={20}
                color={isDarkMode || focused ? colors.white : colors.white}
              />
              <ResponsiveText
                title={label}
                fontStyle={{
                  color: isDarkMode ? colors.white : colors.white,
                  fontSize: scale(12),
                  marginTop: scale(6),
                }}
              />
            </View>
          );
        },
        
        tabBarIndicatorStyle: {
          backgroundColor: isDarkMode ? colors.white : colors.black,
          alignItems:'center'
        },
        tabBarIndicatorContainerStyle: {
          overflow: 'hidden',
        },
        tabBarStyle: {
          backgroundColor: isDarkMode ? colors.bgBlack : colors.Olive_Green,
        },
      })}>
      <Tab.Screen name="TabOne" component={AllTab} />
      <Tab.Screen name="TabTwo" component={TabTwo} />
      <Tab.Screen name="TabThree" component={TabThree} />
      <Tab.Screen name="TabFour" component={TabFour} />
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
