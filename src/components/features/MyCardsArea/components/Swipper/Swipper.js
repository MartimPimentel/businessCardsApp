import React, {useEffect, useRef} from 'react';
import {Dimensions, View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {useDispatch, useSelector} from 'react-redux';
import {changeShownCard} from '../../../../../shared/api/redux/cardsActions';
import Card from '../../../../shared/Card/Card';
import {useIsFocused} from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

export const {width} = Dimensions.get('window');
const Swipper = () => {
  const swipperRef = useRef();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {filteredCards} = useSelector((state) => state.cards);
  useEffect(() => {
    swipperRef.current.goToFirstIndex();
  }, [filteredCards]);
  useEffect(() => {
    if (isFocused) {
      swipperRef.current.goToFirstIndex();
      dispatch(changeShownCard(filteredCards[0]));
    }
  }, [isFocused]);
  return (
    <View
      style={{
        height: windowHeight <= 600 ? 210 : 250,
      }}>
      <SwiperFlatList
        showPagination
        ref={swipperRef}
        paginationDefaultColor="grey"
        paginationActiveColor="#8AB1F2"
        paginationStyleItem={{height: 12, width: 12, marginRight: 0}}
        data={filteredCards}
        renderItem={({item}) => (
          <View style={{width}}>
            <Card key={item.key} data={item} />
          </View>
        )}
        onChangeIndex={({index}) =>
          dispatch(changeShownCard(filteredCards[index]))
        }
      />
    </View>
  );
};
export default Swipper;
