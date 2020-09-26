import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import Swiper from 'react-native-swiper';
import Card from '../../../../shared/Card/Card';
const windowHeight = Dimensions.get('window').height;

const Swipper = ({data, onChangeIndex}) => {
  return (
    <View style={{height: windowHeight <= 600 ? 210 : 250}}>
      <Swiper
        showsButtons={false}
        loop={false}
        paginationStyle={{bottom: 0}}
        onIndexChanged={onChangeIndex}>
        {data.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </Swiper>
    </View>
  );
};
export default Swipper;
