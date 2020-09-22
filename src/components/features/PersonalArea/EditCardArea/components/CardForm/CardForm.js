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
import LinearGradient from 'react-native-linear-gradient';

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
    mode: 'onSubmit',
  });
  const [profileImage, setProfileImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const onSubmit = (data) => {
    redirectSubmittedData(data);
  };
  const pickFromGallery = (type) => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      cropperCircleOverlay: true,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: '#A9E2FD',
      cropperToolbarColor: '#A9E2FD',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: 'white',
    })
      .then((image) => {
        console.log('received image', image);
        const obj = {
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        };
        if (type == 'profile') {
          setProfileImage(obj);
        } else {
          setLogoImage(obj);
        }
      })
      .catch((e) => {
        return null;
      });
  };
  const openCamara = (type) => {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true,
      cropperCircleOverlay: true,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: '#A9E2FD',
      cropperToolbarColor: '#A9E2FD',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: 'white',
    })
      .then((image) => {
        console.log(image);
        const obj = {
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        };
        if (type == 'profile') {
          setProfileImage(obj);
        } else {
          setLogoImage(obj);
        }
      })
      .catch((e) => {
        return null;
      });
  };
  useEffect(() => {
    return handleSubmit(onSubmit);
  }, [onClickToSave]);
  return (
    <View style={Styles.outsideContainer}>
      <View style={{marginBottom: 25, width: '100%'}}>
        <Text style={Styles.titleEntries}>Profile Photo</Text>
        <View style={Styles.photoContainer}>
          {profileImage ? (
            <>
              <Image style={Styles.photoStyles} source={profileImage} />
              <TouchableOpacity
                onPress={() => {
                  setProfileImage(null);
                }}>
                <LinearGradient
                  style={Styles.deleteImageButton}
                  colors={['#A9E2FD', '#8AB1F2']}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    Delete
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  pickFromGallery('profile');
                }}>
                <LinearGradient
                  style={Styles.chooseImageButton}
                  colors={['#A9E2FD', '#8AB1F2']}>
                  <Text style={{color: 'white'}}>Choose picture</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  openCamara('profile');
                }}>
                <LinearGradient
                  style={Styles.deleteImageButton}
                  colors={['#A9E2FD', '#8AB1F2']}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    Take picture
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
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
      <View
        style={{
          borderColor: 'gainsboro',
          borderBottomWidth: 2.5,
          marginBottom: 20,
        }}>
        <View
          style={{
            marginBottom: 25,
            width: '100%',
          }}>
          <Text style={Styles.titleEntries}>Company Logo</Text>
          <View style={Styles.photoContainer}>
            {logoImage ? (
              <>
                <Image style={Styles.photoStyles} source={logoImage} />
                <TouchableOpacity
                  onPress={() => {
                    setLogoImage(null);
                  }}>
                  <LinearGradient
                    style={Styles.deleteImageButton}
                    colors={['#A9E2FD', '#8AB1F2']}>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                      Delete
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => {
                    pickFromGallery('logo');
                  }}>
                  <LinearGradient
                    style={Styles.chooseImageButton}
                    colors={['#A9E2FD', '#8AB1F2']}>
                    <Text style={{color: 'white'}}>Choose picture</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    openCamara('logo');
                  }}>
                  <LinearGradient
                    style={Styles.deleteImageButton}
                    colors={['#A9E2FD', '#8AB1F2']}>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                      Take picture
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
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
