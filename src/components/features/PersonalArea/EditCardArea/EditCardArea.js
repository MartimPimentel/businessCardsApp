import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import HeaderEdit from './components/Header/HeaderEdit';
import CardForm from './components/CardForm/CardForm';
import Styles from './EditCardAreaStyles';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import SInfo from 'react-native-sensitive-info';
import {useDispatch} from 'react-redux';
import {useCardUpdaters} from '../../../../shared/api/useCardUpdaters';
import {openModal} from '../../../shared/Modal/modalReducer';

const EditCardArea = ({route, navigation}) => {
  //const navigation = useNavigation();
  const dispatch = useDispatch();
  const scrollViewRef = useRef();
  const {createCard, editCard, deleteCard} = useCardUpdaters();
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
    console.log('-->', route.params.cardData);
    if (route.params.cardData == undefined) {
      createCard(data, navigation);
    } else {
      editCard(data, navigation);
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
            deleteCard(navigation);
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
  useEffect(() => {
    console.log(route.params.cardData);
  }, [route.params.cardData]);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <HeaderEdit
        onClickToSaveData={() => {
          setPressedSave(pressedSave != undefined ? !pressedSave : true);
        }}
        onPressBack={() => {
          navigation.goBack();
          setDeleteModalResponse(!deleteModalResponse);
        }}
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
            data={route.params.cardData}
            onClickToDelete={handleDeleteCard}
            deleteErrors={isFocused}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
export default EditCardArea;
