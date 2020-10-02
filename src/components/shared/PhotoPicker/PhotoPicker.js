import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {View, Text, Image} from 'react-native';
import Styles from './PhotoPickerStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const PhotoPicker = ({onChange, data}) => {
  const [imageTaken, setImageTaken] = useState(data);

  const pickFromGallery = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      includeBase64: true,
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
        const obj = {
          mime: image.mime,
          data: image.data,
        };
        setImageTaken(obj);
        onChange(obj);
      })
      .catch((e) => {
        return null;
      });
  };
  const openCamara = async () => {
    await ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true,
      includeBase64: true,
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
        const obj = {
          mime: image.mime,
          data: image.data,
        };
        setImageTaken(obj);
        onChange(obj);
      })
      .catch((e) => {
        return null;
      });
  };
  return (
    <View style={Styles.photoContainer}>
      {imageTaken ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Image
            style={Styles.photoStyles}
            source={{
              uri: `data:${imageTaken.mime};base64,${imageTaken.data}`,
            }}
          />
          <View style={{width: '70%'}}>
            <TouchableOpacity
              onPress={() => {
                setImageTaken(null);
                onChange(null);
              }}
              style={{
                width: '50%',
                alignSelf: 'center',
              }}>
              <LinearGradient
                style={Styles.deleteImageButton}
                colors={['#A9E2FD', '#8AB1F2']}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  Delete
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              pickFromGallery();
            }}
            style={{width: 120}}>
            <LinearGradient
              style={Styles.chooseImageButton}
              colors={['#A9E2FD', '#8AB1F2']}>
              <Text style={{color: 'white'}}>Choose picture</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{width: '5%'}}></View>
          <TouchableOpacity
            onPress={() => {
              openCamara();
            }}
            style={{width: 110}}>
            <LinearGradient
              style={Styles.chooseImageButton}
              colors={['#A9E2FD', '#8AB1F2']}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Take picture
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default PhotoPicker;
