import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../styles/Colors';
import VectorIcon from '../components/CustomIcons';
import ResponsiveText from '../components/ResponsiveText';

const TabOne = () => (
  <View style={styles.center}>
    <Text>Tab One Content</Text>
  </View>
);

const TabTwo = () => (
  <ScrollView contentContainerStyle={styles.center}>
    <View>
      <Text>Tab Two Content</Text>
    </View>
  </ScrollView>
);

const data = [{key: 'tabOne'}, {key: 'tabTwo'}];

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

const Tab = createMaterialTopTabNavigator();
const TabBarNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          let iconName = '';
          let label = '';

          if (route.name === 'TabOne') {
            iconName = focused ? 'home' : 'home-outline';
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
        tabBarIndicatorStyle: {backgroundColor: colors.black},
        tabBarStyle: {backgroundColor: colors.Olive_Green},
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
