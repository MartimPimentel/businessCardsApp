import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import Styles from './CardFormStyles';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ConnectFacebookIcon,
  ConnectInstagramIcon,
  ConnectLinkedInIcon,
} from '../../../../../../assets/icons';
import PhotoPicker from '../../../../../shared/PhotoPicker/PhotoPicker';

const projectFormSchema = yup.object().shape({
  name: yup.string().required('*Required'),
  email: yup.string(),
  phoneNumber: yup.string(),
  address: yup.string(),
  companyName: yup.string(),
});
const windowWidth = Dimensions.get('window').width;

const CardForm = ({onClickToSave, redirectSubmittedData, data}) => {
  const {handleSubmit, trigger, watch, errors, control} = useForm({
    resolver: yupResolver(projectFormSchema),
    mode: 'onSubmit',
  });
  const onSubmit = (data) => {
    redirectSubmittedData(data);
  };
  const {
    name,
    address,
    companyLogo,
    companyName,
    email,
    facebookLink,
    instagramLink,
    linkedInLink,
    observations,
    phoneNumber,
    profilePhoto,
  } = data;

  useEffect(() => {
    return handleSubmit(onSubmit);
  }, [onClickToSave]);
  return (
    <View style={Styles.outsideContainer}>
      <View style={Styles.separatorPhotos}>
        <View style={{marginBottom: 25, width: '100%'}}>
          <Text style={Styles.titleEntries}>Profile Photo</Text>
          <Controller
            control={control}
            name="profilePhoto"
            defaultValue=""
            render={({onChange, onBlur, value}) => (
              <PhotoPicker
                onChange={(image) => {
                  onChange(image);
                }}
              />
            )}
          />
        </View>
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>NAME</Text>
        <Controller
          control={control}
          name="name"
          defaultValue={name}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.name && (
          <Text style={{color: 'red'}}>{errors.name.message}</Text>
        )}
      </View>

      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>EMAIL</Text>
        <Controller
          control={control}
          name="email"
          defaultValue={email}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={{color: 'red'}}>This is required.</Text>}
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>PHONE NUMBER</Text>
        <Controller
          control={control}
          name="phoneNumber"
          defaultValue={phoneNumber}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.phoneNumber && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>ADDRESS</Text>
        <Controller
          control={control}
          name="address"
          defaultValue={address}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.address && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>COMPANY NAME</Text>
        <Controller
          control={control}
          name="companyName"
          defaultValue={companyName}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.companyName && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
      </View>
      <View style={Styles.separatorPhotos}>
        <View
          style={{
            marginBottom: 25,
            width: '100%',
          }}>
          <Text style={Styles.titleEntries}>Company Logo</Text>
          <Controller
            control={control}
            name="companyLogo"
            defaultValue={companyLogo}
            render={({onChange, onBlur, value}) => (
              <PhotoPicker
                onChange={(image) => {
                  onChange(image);
                }}
              />
            )}
          />
        </View>
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>OBSERVATIONS</Text>
        <Controller
          control={control}
          name="observations"
          defaultValue={observations}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={[
                Styles.textInputStyles,
                {
                  fontSize: 15,
                  textAlignVertical: 'top',
                  width: '100%',
                  height: 'auto',
                },
              ]}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              multiline
              editable
              autoCapitalize="sentences"
              placeholder="Start typing here..."
              numberOfLines={5}
            />
          )}
        />
        {errors.companyName && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>SOCIAL NETWORKS</Text>
        <View style={{marginTop: 10, left: -3}}>
          <Controller
            control={control}
            name="facebookLink"
            defaultValue=""
            render={({onChange, onBlur, value}) => (
              <TouchableOpacity>
                <ConnectFacebookIcon
                  viewBox={windowWidth <= 350 ? '10 -7 250 95' : ''}
                  style={{left: windowWidth <= 350 ? -50 : -10}}
                />
              </TouchableOpacity>
            )}
          />
          <Controller
            control={control}
            name="instagramLink"
            defaultValue=""
            render={({onChange, onBlur, value}) => (
              <TouchableOpacity>
                <ConnectInstagramIcon
                  viewBox={windowWidth <= 350 ? '10 -7 250 95' : ''}
                  style={{left: windowWidth <= 350 ? -50 : -10}}
                />
              </TouchableOpacity>
            )}
          />
          <Controller
            control={control}
            name="linkedInLink"
            defaultValue=""
            render={({onChange, onBlur, value}) => (
              <TouchableOpacity>
                <ConnectLinkedInIcon
                  viewBox={windowWidth <= 350 ? '10 -7 250 95' : ''}
                  style={{left: windowWidth <= 350 ? -50 : -10}}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default CardForm;
