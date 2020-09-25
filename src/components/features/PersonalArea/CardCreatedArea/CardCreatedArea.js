import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Styles from './CardCreatedAreaStyles';
import Header from '../../../shared/Header/Header';
import Card from '../../../shared/Card/Card';
import {QRCodeIcon, NFCIcon} from '../../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardCreatedArea = () => {
  return (
    <View style={{height: '100%'}}>
      <Header />
      <View style={Styles.textBox}>
        <Text style={Styles.text}>Personal Area</Text>
      </View>
      <View style={Styles.card}>
        <Card />
      </View>
      <View style={Styles.divider}>
        <View style={Styles.outsideContainer}>
          <View style={Styles.footerBackground}></View>
          <View style={Styles.buttonsContainer}>
            <View style={{width: '25%', height: '90%'}}>
              <TouchableOpacity>
                <NFCIcon
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </TouchableOpacity>
            </View>
            <View style={{width: '25%', height: '90%'}}>
              <TouchableOpacity>
                <QRCodeIcon
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardCreatedArea;
