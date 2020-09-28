import React, {useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import HeaderEdit from './components/Header/HeaderEdit';
import CardForm from './components/CardForm/CardForm';
import Styles from './EditCardAreaStyles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
const EditCardArea = ({data}) => {
  const navigation = useNavigation();
  const route = useRoute();

  const [pressedSave, setPressedSave] = useState(undefined);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@PERSONAL_DATA', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const saveCardData = (data) => {
    console.log('Saved data:', data);
    storeData(data);

    navigation.navigate('PersonalArea');
  };
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={{height: '100%', width: '100%'}}>
        <HeaderEdit
          onClickToSaveData={() => {
            setPressedSave(pressedSave != undefined ? !pressedSave : true);
          }}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}>
          <View style={Styles.outsideContainer}>
            <Text style={Styles.titleStyles}>Edit My Card</Text>

            <CardForm
              onClickToSave={pressedSave}
              redirectSubmittedData={saveCardData}
              data={route.params}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};
export default EditCardArea;
