import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import SearchBar from '../../../../shared/SearchBar/SearchBar';
import Styles from './HeaderStyles';
import {
  MenuIcon,
  CardsIcon,
  SearchIcon,
  LeftArrowIcon,
} from '../../../../../assets/icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const HeaderSearch = ({data, handleFilter}) => {
  const navigation = useNavigation();

  const [searchBarActivated, setSearchBarActivated] = useState(false);

  if (!searchBarActivated) {
    return (
      <View style={Styles.header}>
        <SafeAreaView style={Styles.safeAreaView}>
          <LinearGradient
            style={Styles.background}
            colors={['#A9E2FD', '#8AB1F2']}>
            <View style={Styles.icons}>
              <TouchableOpacity
                style={Styles.leftIcon}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <MenuIcon />
              </TouchableOpacity>
              <View style={{width: '30%'}}>
                <CardsIcon
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </View>
              <View style={Styles.rightIcon}>
                <TouchableOpacity
                  onPress={() => {
                    setSearchBarActivated(true);
                  }}>
                  <SearchIcon />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </View>
    );
  } else {
    return (
      <View style={Styles.header}>
        <SafeAreaView style={Styles.safeAreaView}>
          <LinearGradient
            style={Styles.background}
            colors={['#A9E2FD', '#8AB1F2']}>
            <View style={Styles.searchBarView}>
              <TouchableOpacity
                onPress={() => {
                  setSearchBarActivated(false);
                }}>
                <LeftArrowIcon style={{marginLeft: 20}} />
              </TouchableOpacity>
              <SearchBar data={data} onFilter={handleFilter} />
            </View>
          </LinearGradient>
        </SafeAreaView>
      </View>
    );
  }
};

export default HeaderSearch;
