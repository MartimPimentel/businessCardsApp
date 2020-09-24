import React from 'react';
import {View} from 'react-native';

import Swiper from 'react-native-swiper';
import Card from '../../../../shared/Card/Card';

const arr = [{title: 'card one'}, {title: 'card two'}, {title: 'card three'}];
const Swipper = () => {
  return (
    <Swiper paginationStyle={{bottom: '20%'}} showsButtons={false} loop={false}>
      {arr.map((data, index) => {
        return <Card key={index} data={data.title} />;
      })}
    </Swiper>
  );
};
export default Swipper;
