import React from 'react';
import {Dimensions, View} from 'react-native';

import Swiper from 'react-native-swiper';
import Card from '../../../../shared/Card/Card';
const windowHeight = Dimensions.get('window').height;

const arr = [{title: 'card one'}, {title: 'card two'}, {title: 'card three'}];
const Swipper = () => {
  return (
    <View style={{height: windowHeight <= 600 ? 210 : 250}}>
      <Swiper showsButtons={false} loop={false} paginationStyle={{bottom: 0}}>
        {arr.map((data, index) => {
          return <Card key={index} data={data.title} />;
        })}
      </Swiper>
    </View>
  );
};
export default Swipper;
