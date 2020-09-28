import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Keyboard, ActivityIndicator} from 'react-native';
import {
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import HeaderEdit from './components/Header/HeaderEdit';
import CardForm from './components/CardForm/CardForm';
import Styles from './EditCardAreaStyles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';

const EditCardArea = ({data}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const [pressedSave, setPressedSave] = useState(undefined);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@PERSONAL_DATA', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const clearData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log('Done.');
  };

  const saveCardData = (data) => {
    console.log('Saved data:', data);
    storeData(data);

    navigation.navigate('PersonalArea');
  };

  const handleDeleteCard = () => {
    clearData();
    navigation.navigate('PersonalArea');
  };
  return (
    <>
      {isFocused ? (
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          style={{height: '100%', width: '100%'}}>
          <HeaderEdit
            onClickToSaveData={() => {
              setPressedSave(pressedSave != undefined ? !pressedSave : true);
            }}
          />

          <ScrollView
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            style={{marginTop: 10}}>
            <View style={Styles.outsideContainer}>
              <Text style={Styles.titleStyles}>Edit My Card</Text>

              <CardForm
                onClickToSave={pressedSave}
                redirectSubmittedData={saveCardData}
                data={route.params}
                onClickToDelete={handleDeleteCard}
                deleteErrors={isFocused}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}>
          <ActivityIndicator size={100} color="#8AB1F2" />
        </View>
      )}
    </>
  );
};
export default EditCardArea;
