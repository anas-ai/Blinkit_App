import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/GlobalStyle';
import StatusBarComponet from '../../components/StatusBarComponent/StatusBarComponet';

const EditProfile  = () => {
  return (
    <SafeAreaView style={globalStyles.globalContainer}>
      <StatusBarComponet
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent ={false}
      />
      <Text>EditProfil</Text>
    </SafeAreaView>
  );
};

export default EditProfile ;
