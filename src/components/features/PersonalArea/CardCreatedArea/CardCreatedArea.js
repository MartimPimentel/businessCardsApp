import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Styles from './CardCreatedAreaStyles';
import PersonalAreaHeader from './components/Header/PersonalAreaHeader';
import Card from '../../../shared/Card/Card';
import {QRCodeIcon, NFCIcon} from '../../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../shared/Modal/modalReducer';
import {getFromStore} from '../../../../shared/functions/functions';
import base64url from 'base64url';

const CardCreatedArea = ({route, navigation}) => {
  const [qrcodeVisible, setQrcodeVisible] = useState(false);
<<<<<<< HEAD
  const dispatch = useDispatch();

  const getUserID = () => {
    getFromStore('token').then((res) => {
      if (res != null) {
        const splitted = res.split('.')[1];
        //Expires one day before exp date
        return JSON.parse(base64url.decode(splitted)).userId;
      } else {
        //TO DO handle this
      }
    });
  };

  const handleQrCode = () => {
    dispatch(
      openModal({
        modalType: 'QRCodeModal',
        modalProps: {
          body: <QRCode size={200} value={getUserID()} />,
          cancelButtonTest: 'Close',
        },
      }),
    );
  };
  return (
    <View style={{height: '100%'}}>
      <PersonalAreaHeader data={data} />
=======

  return (
    <View style={{height: '100%'}}>
      <PersonalAreaHeader
        navigation={navigation}
        data={route.params.cardData}
        disabled={qrcodeVisible}
      />
>>>>>>> 1661179fdc18ad513a089a0eb3d31bbdb64f49cc
      <View style={{marginTop: 20}}>
        <View style={Styles.textBox}>
          <Text style={Styles.titleTexts}>Personal Area</Text>
        </View>
        <View style={Styles.card}>
          <Card data={route.params.cardData} />
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
              <TouchableOpacity onPress={handleQrCode}>
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
