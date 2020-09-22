import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Dimensions, Image} from 'react-native';
import Styles from './CardFormStyles';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import {
  ConnectFacebookIcon,
  ConnectInstagramIcon,
  ConnectLinkedInIcon,
} from '../../../../../../assets/icons';
import Icon from 'react-native-vector-icons/Ionicons';

const projectFormSchema = yup.object().shape({
  name: yup.string().required('*Required'),
  email: yup.string().required('*Required'),
  phoneNumber: yup.string().required('*Required'),
  address: yup.string().required('*Required'),
  companyName: yup.string().required('*Required'),
});
const windowWidth = Dimensions.get('window').width;

const CardForm = ({onClickToSave, redirectSubmittedData}) => {
  const {handleSubmit, trigger, watch, errors, control} = useForm({
    resolver: yupResolver(projectFormSchema),
  });
  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);
  const onSubmit = (data) => {
    redirectSubmittedData(data);
  };
  const pickSingle = (cropit, circular = false, mediaType) => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image) => {
        console.log('received image', image);

        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };
  useEffect(() => {
    return handleSubmit(onSubmit);
  }, [onClickToSave]);
  return (
    <View style={Styles.outsideContainer}>
      <View style={{marginBottom: 15, width: '80%'}}>
        <Text style={Styles.titleEntries}>Profile Photo</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {image ? (
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                borderRadius: 100 / 2,
              }}
              source={image}
            />
          ) : (
            <></>
          )}
          <TouchableOpacity
            style={{
              height: 40,
              width: 100,
              backgroundColor: 'grey',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => pickSingle(true, true)}>
            <Text style={{color: 'white'}}>Choose image</Text>
          </TouchableOpacity>
          {image ? (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setImage(null)}>
              <Icon name="close" size={30} color="blue" />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>NAME</Text>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.name && <Text style={{color: 'red'}}>This is required.</Text>}
      </View>

      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>EMAIL</Text>
        <Controller
          control={control}
          name="email"
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
      <TouchableOpacity>
        <ConnectFacebookIcon
          viewBox={windowWidth <= 350 ? '10 -7 250 95' : ''}
          style={{left: windowWidth <= 350 ? -50 : -10}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ConnectInstagramIcon
          viewBox={windowWidth <= 350 ? '10 -7 250 95' : ''}
          style={{left: windowWidth <= 350 ? -50 : -10}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ConnectLinkedInIcon
          viewBox={windowWidth <= 350 ? '10 -7 250 95' : ''}
          style={{left: windowWidth <= 350 ? -50 : -10}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default CardForm;
