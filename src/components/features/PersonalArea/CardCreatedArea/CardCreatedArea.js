import React, {useContext, useEffect, useState} from 'react';
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
import {AsyncContext} from '../../../../shared/providers/asyncProvider';

const CardCreatedArea = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const {setLoading, setError} = useContext(AsyncContext);

  const getUserID = () => {
    setLoading(true);
    getFromStore('token').then((res) => {
      if (res != null) {
        const splitted = res.split('.')[1];
        //Expires one day before exp date
        setUserId(JSON.parse(base64url.decode(splitted)).userId);
        setLoading(false);
      } else {
        setError(
          {
            message: 'Ups something went wrong. Please login again',
          },
          {
            cancelButtonTest: 'Ok',
            onClose: () => {
              setError(null);
              navigation.reset({
                index: 0,
                routes: [{name: 'NotAuth'}],
              });
            },
          },
        );
      }
    });
  };
  const handleQrCode = () => {
    dispatch(
      openModal({
        modalType: 'QRCodeModal',
        modalProps: {
          body: <QRCode size={200} value={userId} />,
          cancelButtonTest: 'Close',
        },
      }),
    );
  };
  useEffect(() => {
    getUserID();
  }, []);

  return (
    <View style={{height: '100%'}}>
      <PersonalAreaHeader
        navigation={navigation}
        data={route.params.cardData}
      />
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
