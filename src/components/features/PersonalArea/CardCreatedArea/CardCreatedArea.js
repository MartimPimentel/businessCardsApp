import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Styles from './CardCreatedAreaStyles';
import PersonalAreaHeader from './components/Header/PersonalAreaHeader';
import Card from '../../../shared/Card/Card';
import {QRCodeIcon, NFCIcon} from '../../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import QRCodeModal from '../../../shared/Modal/QRCodeModal';
import QRCode from 'react-native-qrcode-svg';

const CardCreatedArea = ({data}) => {
  const [qrcodeVisible, setQrcodeVisible] = useState(false);
  return (
    <View style={{height: '100%'}}>
      <PersonalAreaHeader data={data} disabled={qrcodeVisible} />
      <View style={{marginTop: 20}}>
        <View style={Styles.textBox}>
          <Text style={Styles.titleTexts}>Personal Area</Text>
        </View>
        <View style={Styles.card}>
          <Card data={data} />
        </View>
      </View>

      <QRCodeModal
        isVisible={qrcodeVisible}
        cancelButtonTest="Close"
        onClose={() => setQrcodeVisible(false)}
        body={<QRCode size={200} value={'SERVER INFO'} />}
      />

      <View style={Styles.divider}>
        <View style={Styles.outsideContainer}>
          <View style={Styles.footerBackground}></View>
          <View style={Styles.buttonsContainer}>
            <View style={{width: '25%', height: '90%'}}>
              <TouchableOpacity disabled={qrcodeVisible}>
                <NFCIcon
                  width="100%"
                  height="100%"
                  preserveAspectRatio="meet"
                />
              </TouchableOpacity>
            </View>
            <View style={{width: '25%', height: '90%'}}>
              <TouchableOpacity
                disabled={qrcodeVisible}
                onPress={() => {
                  setQrcodeVisible(true);
                }}>
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
