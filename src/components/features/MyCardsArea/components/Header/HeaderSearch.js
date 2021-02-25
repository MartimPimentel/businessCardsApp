import React, {useEffect, useState} from 'react';
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
import {filterCards} from '../../../../../shared/api/redux/cardsActions';
import {useDispatch, useSelector} from 'react-redux';

const HeaderSearch = ({overlayOpened, openSearchBar, onChangeHeader}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {cards} = useSelector((state) => state.cards);
  const [searchBarActivated, setSearchBarActivated] = useState(false);
  useEffect(() => {
    setSearchBarActivated(openSearchBar);
  }, [openSearchBar]);
  return (
    <View style={Styles.header}>
      <SafeAreaView style={Styles.safeAreaView}>
        <LinearGradient
          style={Styles.background}
          colors={['#A9E2FD', '#8AB1F2']}>
          {!searchBarActivated ? (
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
                    onChangeHeader(true);
                    setSearchBarActivated(true);
                  }}>
                  <SearchIcon />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={Styles.searchBarView}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(filterCards(cards));
                  onChangeHeader(false);
                  setSearchBarActivated(false);
                }}
                style={Styles.backButtonContainer}>
                <LeftArrowIcon />
              </TouchableOpacity>
              <SearchBar overlayOpened={overlayOpened} />
            </View>
          )}
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

export default HeaderSearch;
