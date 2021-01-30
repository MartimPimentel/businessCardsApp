import React from 'react';
import {View, Text} from 'react-native';
import Styles from './DeleteCardStyles';
import {CardDrawRight, CardDrawLeft} from '../../../../../assets/backgrounds';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
const DeleteCard = ({handleDeleteDecison}) => {
  return (
    <View style={Styles.outsideContainer}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={Styles.backgroundStyles}
        colors={['#80C8FC', '#5350DB']}>
        <View style={Styles.textContainerStyles}>
          <Text style={Styles.textStyles}> Are you sure you </Text>
          <Text style={Styles.textStyles}> want to delete this card?</Text>
        </View>
        <View style={Styles.buttonsContainer}>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity
              style={Styles.buttonsStyles}
              onPress={() => {
                handleDeleteDecison('yes');
              }}>
              <Text style={Styles.textButtonStyles}>Yes</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '25%'}}></View>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity
              style={Styles.buttonsStyles}
              onPress={() => {
                handleDeleteDecison('no');
              }}>
              <Text style={Styles.textButtonStyles}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default DeleteCard;
