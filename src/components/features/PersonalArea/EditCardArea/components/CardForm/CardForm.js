import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import Styles from './CardFormStyles';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DeleteCard} from '../../../../../../assets/icons';
import PhotoPicker from '../../../../../shared/PhotoPicker/PhotoPicker';
import PhoneInput from 'react-native-phone-number-input';

var phoneInput = null;
const projectFormSchema = yup.object().shape({
  name: yup.string().required('*Required'),
  email: yup.string().email('*Invalid email address'),
  phoneData: yup
    .object()
    .test('isValidNumber', '*Invalid number', function (value) {
      return (
        value.phoneNumber == '' ||
        phoneInput.current.isValidNumber(value.callingCode + value.phoneNumber)
      );
    }),
  address: yup.string(),
  companyName: yup.string(),
  linkedInLink: yup.string(),
  facebookLink: yup.string(),
  instagramLink: yup.string(),
});
const windowWidth = Dimensions.get('window').width;

const CardForm = ({
  onClickToSave,
  redirectSubmittedData,
  data,
  onClickToDelete,
  deleteErrors,
}) => {
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
    phoneData,
    profilePhoto,
  } = data;
  const {handleSubmit, errors, control, reset, clearErrors} = useForm({
    resolver: yupResolver(projectFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: name,
      address: address,
      companyLogo: companyLogo,
      companyName: companyName,
      email: email,
      facebookLink: facebookLink,
      instagramLink: instagramLink,
      linkedInLink: linkedInLink,
      observations: observations,
      phoneData: phoneData,
      profilePhoto: profilePhoto,
    },
  });
  const onSubmit = (data) => {
    var instagramUrl = checkHttps(data.instagramLink);
    data.instagramLink = instagramUrl;
    var facebookUrl = checkHttps(data.facebookLink);
    data.facebookLink = facebookUrl;
    var linkedinUrl = checkHttps(data.linkedInLink);
    data.linkedInLink = linkedinUrl;
    console.log(data.instagramLink);
    console.log(data.facebookLink);
    console.log(data.linkedInLink);
    redirectSubmittedData(data);
  };
  const onDeleteCard = () => {
    reset({
      name: '',
      address: '',
      companyLogo: '',
      companyName: '',
      email: '',
      facebookLink: '',
      instagramLink: '',
      linkedInLink: '',
      observations: '',
      phoneData: '',
      profilePhoto: '',
    });
    onClickToDelete();
  };
  useEffect(() => {
    return handleSubmit(onSubmit);
  }, [onClickToSave]);
  useEffect(() => {
    clearErrors();
  }, [deleteErrors]);

  phoneInput = useRef();

  const checkHttps = (url) => {
    if (url == '') {
      return url;
    }
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      if (url.startsWith('www.')) {
        return 'https://' + url;
      } else {
        url = url.substring(url.indexOf('www.'));
        return 'https://' + url;
      }
    } else {
      return url;
    }
  };

  return (
    <View style={Styles.outsideContainer}>
      <View style={Styles.separatorPhotos}>
        <View style={{marginBottom: 25, width: '100%'}}>
          <Text style={Styles.titleEntries}>Profile Photo</Text>
          <Controller
            control={control}
            name="profilePhoto"
            render={({onChange, onBlur, value}) => (
              <PhotoPicker
                onChange={(image) => {
                  onChange(image);
                }}
                data={profilePhoto}
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
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="email-address"
            />
          )}
        />
        {errors.email && (
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )}
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>PHONE NUMBER</Text>
        <Controller
          control={control}
          name="phoneData"
          render={({onChange, onBlur, value}) => (
            <PhoneInput
              containerStyle={{marginTop: 10}}
              ref={phoneInput}
              defaultValue={value.phoneNumber}
              defaultCode={phoneData.countryCode}
              onChangeText={(number) => {
                onChange({
                  countryCode: phoneInput.current.getCountryCode(),
                  callingCode: phoneInput.current.getCallingCode(),
                  phoneNumber: number,
                });
              }}
              withShadow
            />
          )}
        />
        {errors.phoneData && (
          <Text style={{color: 'red'}}>{errors.phoneData.message}</Text>
        )}
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>ADDRESS</Text>
        <Controller
          control={control}
          name="address"
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
        <View style={{marginBottom: 10}}>
          <Text style={Styles.titleEntries}>LINKEDIN URL</Text>
          <Controller
            control={control}
            name="linkedInLink"
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={Styles.textInputStyles}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={Styles.titleEntries}>FACEBOOK URL</Text>
          <Controller
            control={control}
            name="facebookLink"
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={Styles.textInputStyles}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={Styles.titleEntries}>INSTAGRAM URL</Text>
          <Controller
            control={control}
            name="instagramLink"
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={Styles.textInputStyles}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
        </View>
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>DELETE CARD</Text>
        <TouchableOpacity onPress={onDeleteCard}>
          <DeleteCard style={{alignSelf: 'center', marginTop: 10}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CardForm;
