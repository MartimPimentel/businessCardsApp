import React, {useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import HeaderEdit from './components/Header/HeaderEdit';
import CardForm from './components/CardForm/CardForm';
import Styles from './EditCardAreaStyles';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
import Spinner from '../../../shared/Spinner/Spinner';
import {nullCard} from '../../../../shared/consts';
import Modal from '../../../shared/Modal/Modal';
import SInfo from 'react-native-sensitive-info';
import {createCard} from '../../../../shared/api/createCard';
import {deleteCard} from '../../../../shared/api/deleteCard';
import {editCard} from '../../../../shared/api/editCard';

const EditCardArea = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const [pressedSave, setPressedSave] = useState(undefined);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteModalResponse, setDeleteModalResponse] = useState(false);

  const [loading, setLoading] = useState(true);
  const [dbError, setError] = useState(null);

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
    storeData(data);
    setLoading(true);
    setError(null);
    if (route.params == undefined) {
      createCard(data)
        .then((res) => {
          navigation.navigate('PersonalArea');
        })
        .catch((error) => {
          console.log(error.request.response);
          const errors = JSON.parse(error.request.response);
          console.log(errors);
          setError(errors);
        });
    } else {
      storeData(data);
      editCard(data)
        .then((res) => {
          navigation.navigate('PersonalArea');
        })
        .catch((error) => {
          console.log(error.request);
          const errors = JSON.parse(error.request.response);
          console.log(errors);
          setError(errors);
        });
    }
  };

  const handleDeleteCard = () => {
    setDeleteModalResponse(true);
    clearData();
    route.params = undefined;

    setLoading(true);
    setError(null);
    deleteCard()
      .then((res) => {
        console.log('RES:', res.status);
        navigation.navigate('PersonalArea');
      })
      .catch((error) => {
        //console.log(error.request.response);
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        setError(errors);
      });
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
