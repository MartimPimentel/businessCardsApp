import React, {useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import HeaderEdit from './components/Header/HeaderEdit';
import CardForm from './components/CardForm/CardForm';
import Styles from './EditCardAreaStyles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
import Spinner from '../../../shared/Spinner/Spinner';
import {nullCard} from '../../../../shared/consts';
import Modal from '../../../shared/Modal/Modal';
import SInfo from 'react-native-sensitive-info';
import createCard from '../../../../shared/api/createCard';

const EditCardArea = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const [pressedSave, setPressedSave] = useState(undefined);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteModalResponse, setDeleteModalResponse] = useState(false);

  const saveRequest = () => {};

  const storeData = async (value) => {
    const jsonValue = JSON.stringify(value);
    await SInfo.setItem('personalCard', jsonValue, {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
  };

  const clearData = async () => {
    await SInfo.deleteItem('personalCard', {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
    console.log('Done.');
  };

  const saveCardData = (data) => {
    console.log('Saved data:', data);
    storeData(data);

    /* createCard(data)
    .then((res) => {​​
      console.log(res.status);
    }​​)
    .catch((error) => {​​
      const errors = JSON.parse(error.request.response);
      console.log(errors);
    }​​); */

    navigation.navigate('PersonalArea');
  };

  const handleDeleteCard = () => {
    setDeleteModalResponse(true);
    clearData();
    route.params = nullCard;
    navigation.navigate('PersonalArea');
  };
  return isFocused ? (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <HeaderEdit
        onClickToSaveData={() => {
          setPressedSave(pressedSave != undefined ? !pressedSave : true);
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
        <View style={Styles.outsideContainer}>
          <Text style={Styles.titleStyles}>Edit My Card</Text>

          <CardForm
            deleteResponse={deleteModalResponse}
            onClickToSave={pressedSave}
            redirectSubmittedData={saveCardData}
            data={route.params}
            onClickToDelete={() => setDeleteModalOpen(true)}
            deleteErrors={isFocused}
          />
        </View>
      </ScrollView>
      <Modal
        actionButtonText="Delete"
        cancelButtonTest="Cancel"
        isVisible={isDeleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setDeleteModalResponse(false);
        }}
        onAction={() => {
          setDeleteModalOpen(false);
          handleDeleteCard();
        }}
        header={
          <Text style={{fontFamily: 'Nunito-Regular', fontSize: 20}}>
            Are you sure?
          </Text>
        }
        body={
          <Text style={{fontSize: 15, textAlign: 'center', letterSpacing: 1}}>
            Deleting this card will make all your connections lose your card.
          </Text>
        }
      />
    </TouchableWithoutFeedback>
  ) : (
    <Spinner />
  );
};
export default EditCardArea;
