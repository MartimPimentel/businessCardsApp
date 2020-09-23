import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {View, Text, Image} from 'react-native';
import Styles from './PhotoPickerStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const PhotoPicker = ({onChange}) => {
  const [imageTaken, setImageTaken] = useState(null);

  const pickFromGallery = () => {
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
        <>
          <Image style={Styles.photoStyles} source={imageTaken} />
          <TouchableOpacity
            onPress={() => {
              setImageTaken(null);
              onChange(null);
            }}>
            <LinearGradient
              style={Styles.deleteImageButton}
              colors={['#A9E2FD', '#8AB1F2']}>
              <Text style={{color: 'white', textAlign: 'center'}}>Delete</Text>
            </LinearGradient>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              pickFromGallery();
            }}>
            <LinearGradient
              style={Styles.chooseImageButton}
              colors={['#A9E2FD', '#8AB1F2']}>
              <Text style={{color: 'white'}}>Choose picture</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              openCamara();
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
  );
};
export default PhotoPicker;
