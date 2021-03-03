import React from 'react';
import {View, Text, Keyboard} from 'react-native';
import {Divider} from 'react-native-elements';
import {
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {DeleteAccount, OptionsArrow} from '../../../assets/icons/index';
import HeaderSettings from './components/Header/HeaderSettings';
import Styles from './SettingsAreaStyle';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {openModal} from '../../shared/Modal/modalReducer';
import {useDeleteUser} from '../../../shared/api/deleteUser';
import {deleteAllData} from '../../../shared/functions/functions';
import {useDispatch} from 'react-redux';

const SettingsArea = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deleteUser = useDeleteUser();

  const handleDelete = () => {
    dispatch(
      openModal({
        modalType: 'DeleteCardModal',
        modalProps: {
          headerText: 'Are you sure?',
          bodyText: `Are you sure you want to delete your account ?`,
          actionButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          onAction: () => {
            deleteUser().then(
              deleteAllData().then(() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [{name: 'NotAuth'}],
                  }),
                );
              }),
            );
          },
        },
      }),
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{height: '100%', width: '100%'}}>
      <HeaderSettings
        onClickToSaveData={() => {
          setPressedSave(pressedSave != undefined ? !pressedSave : true);
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
        <Text style={Styles.titleStyles}>Settings</Text>
        <View style={Styles.outsideContainer}>
          <TouchableOpacity
            style={Styles.optionsContainer}
            onPress={() => {
              navigation.navigate('EmailForm');
            }}>
            <View style={Styles.optionsView}>
              <Text style={Styles.titleEntries}>Email</Text>
              <OptionsArrow style={{alignSelf: 'center'}} />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            style={Styles.optionsContainer}
            onPress={() => navigation.navigate('PasswordForm')}>
            <View style={Styles.optionsView}>
              <Text style={Styles.titleEntries}>Password</Text>
              <OptionsArrow style={{alignSelf: 'center'}} />
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={Styles.delete} onPress={handleDelete}>
            <DeleteAccount />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
export default SettingsArea;
