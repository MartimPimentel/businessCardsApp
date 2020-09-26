import React from 'react';
import {Dimensions, View} from 'react-native';

import Swiper from 'react-native-swiper';
import Card from '../../../../shared/Card/Card';
const windowHeight = Dimensions.get('window').height;

const arr = [{title: 'card one'}, {title: 'card two'}, {title: 'card three'}];
const Swipper = () => {
  return (
    <Swiper showsButtons={false} loop={false} style={{height: 240}}>
      {arr.map((data, index) => {
        return <Card key={index} data={data.title} />;
      })}
    </Swiper>
  );
};
export default Swipper;
