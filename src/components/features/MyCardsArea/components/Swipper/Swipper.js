import React, {useEffect, useRef} from 'react';
import {Dimensions, View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {useSelector} from 'react-redux';
import Card from '../../../../shared/Card/Card';
const windowHeight = Dimensions.get('window').height;

export const {width} = Dimensions.get('window');
const Swipper = ({data, onChangeIndex, index}) => {
  const swipperRef = useRef();
  const {cards} = useSelector((state) => state.cards);
  useEffect(() => {
    swipperRef.current.goToFirstIndex();
    onChangeIndex(0);
  }, [cards]);
  useEffect(() => {
    if (index == -1) {
      swipperRef.current.goToFirstIndex();
      onChangeIndex(0);
    }
  }, [index]);
  return (
    <View style={{height: windowHeight <= 600 ? 210 : 250}}>
      <SwiperFlatList
        showPagination
        ref={swipperRef}
        paginationDefaultColor="grey"
        paginationActiveColor="#8AB1F2"
        paginationStyleItem={{height: 12, width: 12, marginRight: 0}}
        data={cards}
        renderItem={({item}) => (
          <View style={{width}}>
            <Card key={item.key} data={item} />
          </View>
        )}
        onChangeIndex={({index}) => onChangeIndex(index)}
      />
    </View>
  );
};
export default Swipper;
