import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import HeaderEdit from './components/Header/HeaderEdit';
import CardForm from './components/CardForm/CardForm';
import Styles from './EditCardAreaStyles';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
import SInfo from 'react-native-sensitive-info';
import {useDispatch} from 'react-redux';
import {storeItems} from '../../../../shared/functions/functions';
import {useCardUpdaters} from '../../../../shared/api/useCardUpdaters';
import {openModal} from '../../../shared/Modal/modalReducer';

const EditCardArea = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const scrollViewRef = useRef();
  const {createCard, editCard, deleteCard} = useCardUpdaters();
  const route = useRoute();
  const isFocused = useIsFocused();
  const [pressedSave, setPressedSave] = useState(undefined);
  const [deleteModalResponse, setDeleteModalResponse] = useState(undefined);

  const clearData = async () => {
    await SInfo.deleteItem('personalCard', {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
    console.log('Done.');
  };

  const saveCardData = (data) => {
    storeItems('personalCard', JSON.stringify(data));

    if (route.params == undefined) {
      createCard(data);
    } else {
      editCard(data);
    }
  };
  const handleDeleteCard = () => {
    dispatch(
      openModal({
        modalType: 'DeleteCardModal',
        modalProps: {
          headerText: 'Are you sure?',
          bodyText: `Deleting your card will delete it from all people that you share it with.\n Instead update your card.`,
          actionButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          onAction: () => {
            clearData();
            route.params = undefined;
            deleteCard();
            setDeleteModalResponse(!deleteModalResponse);
          },
        },
      }),
    );
  };
  useEffect(() => {
    if (!isFocused)
      scrollViewRef.current.scrollTo({x: 0, y: 0, animated: false});
  }, [isFocused]);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <HeaderEdit
        onClickToSaveData={() => {
          setPressedSave(pressedSave != undefined ? !pressedSave : true);
        }}
        onPressBack={() => navigation.navigate('PersonalArea')}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10}}
        ref={scrollViewRef}>
        <View style={Styles.outsideContainer}>
          <Text style={Styles.titleStyles}>Edit My Card</Text>
          <CardForm
            deleteResponse={deleteModalResponse}
            onClickToSave={pressedSave}
            redirectSubmittedData={saveCardData}
            data={route.params}
            onClickToDelete={handleDeleteCard}
            deleteErrors={isFocused}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
export default EditCardArea;
