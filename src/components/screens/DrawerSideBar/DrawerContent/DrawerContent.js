import React, {useState} from 'react';
import {
  View,
  Platform,
  Text,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Svg from 'react-native-svg';
import {
  MyCardsIcon,
  PersonalAreaIcon,
  UnknownUser,
} from '../../../../assets/icons';
import {SidebarBackground} from '../../../../assets/backgrounds';
import Styles from './DrawerContentStyles';

const DrawerContent = (props) => {
  const [isMyCardsSelected, setIsMyCardSelected] = useState(true);
  return (
    <View style={{top: -28, left: -25, width: '90%'}}>
      <ImageBackground
        source={SidebarBackground}
        resizeMode="stretch"
        style={Styles.backgroundContainer}>
        <View style={Styles.userProfileContainer}>
          <View style={Styles.userImageContainer}>
            <Image source={UnknownUser} style={Styles.userImageStyles} />
          </View>
          <Text style={Styles.userNameStyles}>Unknown User</Text>
          <Text style={Styles.userEmailStyles}>JonDoe@mail.com</Text>
        </View>

        <View style={Styles.menusContainer}>
          <TouchableOpacity
            style={Styles.myCardsStyle(isMyCardsSelected)}
            onPress={() => {
              setIsMyCardSelected(true);
              props.navigation.navigate('MyCards');
            }}>
            <View style={Styles.seletecTag(isMyCardsSelected)}></View>
            <MyCardsIcon height={30} width={30} />
            <Text style={Styles.textStyle}>My Cards</Text>
          </TouchableOpacity>
          <View style={Styles.separatorStyle}></View>
          <TouchableOpacity
            style={Styles.personalAreaStyle(!isMyCardsSelected)}
            onPress={() => {
              setIsMyCardSelected(false);
              props.navigation.navigate('PersonalArea');
            }}>
            <View style={Styles.seletecTag(!isMyCardsSelected)}></View>
            <PersonalAreaIcon height={30} width={30} />
            <Text style={Styles.textStyle}>Personal Area</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default DrawerContent;
