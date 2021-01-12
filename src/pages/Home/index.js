import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import AvatarSvg from '../../../assets/svg/Avatar';
import StyledText from '../../components/StyledText';
import ChipsSvg from '../../../assets/svg/Chips';
import HandleSvg from '../../../assets/svg/Handle';

const Home = () => {
  const handlePress = () => {
    alert('Click');
  };

  return (
    <View style={styles.home}>
      <View style={styles.home__data}>
        <TouchableOpacity onPress={handlePress}>
          <AvatarSvg />
        </TouchableOpacity>

        <View style={styles.home__nameWrp}>
          <StyledText styles={styles.home__name}>
            Константин Константинопольский
          </StyledText>

          <StyledText styles={styles.home__text}>+7 (960) 123-31-31</StyledText>

          <StyledText styles={styles.home__text}>po4ta@mail.ru</StyledText>

          <ChipsSvg />
        </View>
      </View>

      <HandleSvg style={styles.home__handle} />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexShrink: 1,
  },

  home__data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
    elevation: 5,
    padding: 20,
  },

  home__nameWrp: {
    marginLeft: 30,
    flexShrink: 1,
    justifyContent: 'center',
  },

  home__name: {
    fontSize: 17,
    marginBottom: 10,
  },

  home__text: {
    color: '#636363',
    fontSize: 17,
    marginBottom: 8,
  },

  home__handle: {
    marginTop: 40,
  },
});

export default Home;
