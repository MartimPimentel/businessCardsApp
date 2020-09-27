import React from 'react';
import {View, Text} from 'react-native';
import Styles from './CardCreatedAreaStyles';
import PersonalAreaHeader from './components/Header/PersonalAreaHeader';
import Card from '../../../shared/Card/Card';
import {QRCodeIcon, NFCIcon} from '../../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const personalData = {
  name: 'Martim Pimentel',
  phone: '+351 915 803 555',
  address: 'Rua Cesário Verde 484, Cascais',
  companyName: 'M&M Mobile Solutions',
};

const CardCreatedArea = () => {
  return (
    <View style={{height: '100%'}}>
      <PersonalAreaHeader />
      <View
        style={{
          justifyContent: 'center',
        }}>
        <View style={Styles.textBox}>
          <Text style={Styles.titleTexts}>Personal Area</Text>
        </View>
        <View style={Styles.card}>
          <Card data={personalData} />
        </View>
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
