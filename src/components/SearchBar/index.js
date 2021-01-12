import React, {forwardRef} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import SearchSVG from '../../../assets/svg/Search';
import CleanSvg from '../../../assets/svg/Clean';
import {compose} from '../../helpers/stylecompose';

const activeOpacity = 0.6;

const SearchBar = forwardRef(
  (
    {
      placeholder = 'Введите текст...',
      text,
      onScroll,
      onSort,
      setText,
      onClean,
      containerStyle,
    },
    refTextInput,
  ) => {
    const handleChangeText = (value) => {
      setText && setText(value);
      onSort && onSort(value);
      onScroll && onScroll();
    };

    const handlePress = () => {
      onClean && onClean();
    };

    return (
      <View style={compose(styles.searchBar__wrapper, containerStyle)}>
        <View style={styles.searchBar}>
          <SearchSVG style={styles.searchBar__iconSearch} />

          <TextInput
            ref={refTextInput}
            value={text}
            numberOfLines={1}
            placeholder={placeholder}
            style={styles.searchBar__input}
            onChangeText={handleChangeText}
          />

          <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={handlePress}
            style={styles.searchBar__iconCleanWrp}>
            <CleanSvg style={styles.searchBar__iconClean} />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  searchBar__wrapper: {
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
    elevation: 5,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingLeft: 13,
    paddingRight: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#ababab',
  },

  searchBar__iconSearch: {
    marginRight: 15,
  },

  searchBar__iconCleanWrp: {
    padding: 7,
  },

  searchBar__iconClean: {
    marginRight: 0,
    marginLeft: 10,
  },

  searchBar__input: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#394D72',
  },
});

export default SearchBar;
