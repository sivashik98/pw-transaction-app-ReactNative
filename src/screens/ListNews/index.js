import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {View} from 'react-native';
import StyledText from '../../components/StyledText';

const ListNewsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'orange'}}>
      <View>
        <StyledText>Hellow LIST NEWS!</StyledText>
      </View>
    </SafeAreaView>
  );
};

export default ListNewsScreen;
