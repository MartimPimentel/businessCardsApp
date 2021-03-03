import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Styles from './CardFormStyles';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  DeleteCard,
  AddPhoneIcon,
  RemovePhoneIcon,
} from '../../../../../../assets/icons';
import PhotoPicker from '../../../../../shared/PhotoPicker/PhotoPicker';
import PhoneInput from 'react-native-phone-number-input';
import {
  checkHttps,
  formSchema,
  insertDefaultCard,
} from './functions/cardFunctions';
import {nullCard} from '../../../../../../shared/consts';

var phoneInput = null;
var phoneInput2 = null;

const CardForm = ({
  onClickToSave,
  redirectSubmittedData,
  data = nullCard,
  onClickToDelete,
  deleteErrors,
  deleteResponse,
}) => {
  phoneInput = useRef();
  phoneInput2 = useRef();
  const projectFormSchema = formSchema(phoneInput, phoneInput2);
  const {handleSubmit, errors, control, reset, clearErrors, setValue} = useForm(
    {
      resolver: yupResolver(projectFormSchema),
      mode: 'onChange',
      defaultValues: insertDefaultCard(data),
    },
  );
  const [click2AddPhoneNum, setClick2AddPhoneNum] = useState(
    data.alternativePhoneData && !!data.alternativePhoneData.phoneNumber,
  );

  const [isEditable, setIsEditable] = useState(false);
  const onSubmit = (data) => {
    var instagramUrl = checkHttps(data.instagramLink);
    data.instagramLink = instagramUrl;
    var facebookUrl = checkHttps(data.facebookLink);
    data.facebookLink = facebookUrl;
    var linkedinUrl = checkHttps(data.linkedInLink);
    data.linkedInLink = linkedinUrl;
    redirectSubmittedData(data);
  };
  const onDeleteCard = () => {
    onClickToDelete();
  };
  useEffect(() => {
    return handleSubmit(onSubmit);
  }, [onClickToSave]);
  useEffect(() => {
    clearErrors();
  }, [deleteErrors]);
  useEffect(() => {
    console.log(deleteResponse);
    if (deleteResponse != undefined) reset(nullCard);
  }, [deleteResponse]);
  //bug in android email text fields makes app RN apps crash.Known workaround:
  useEffect(() => {
    reset(insertDefaultCard(data));
    setTimeout(() => {
      setIsEditable(true);
    }, 100);
  }, []);
  return (
    <View style={Styles.outsideContainer}>
      <View style={Styles.separatorPhotos}>
        <View style={{marginBottom: 25, width: '100%'}}>
          <Text style={Styles.titleEntries}>Profile Photo</Text>
          <Controller
            control={control}
            name="profilePhoto"
            defaultValue={data.profilePhoto}
            render={({onChange, onBlur, value}) => (
              <PhotoPicker
                onChange={(image) => {
                  onChange(image);
                }}
                data={value}
                croppingCircular
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
          defaultValue={data.name}
          render={({onChange, onBlur, value}) => (
            <TextInput
              editable={isEditable}
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
          defaultValue={data.email}
          render={({onChange, onBlur, value}) => (
            <TextInput
              editable={isEditable}
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
        <Text style={Styles.titleEntries}>PHONE NUMBER(PRINCIPAL)</Text>
        <Controller
          control={control}
          name="phoneData"
          defaultValue={data.phoneData}
          render={({onChange, onBlur, value}) => (
            <PhoneInput
              containerStyle={{marginTop: 10}}
              ref={phoneInput}
              defaultValue={value ? value.phoneNumber : null}
              defaultCode={value ? value.countryCode : 'PT'}
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

      <TouchableOpacity
        style={Styles.removeAddContainer(!click2AddPhoneNum)}
        onPress={() => setClick2AddPhoneNum(true)}>
        <AddPhoneIcon />
        <Text style={Styles.removeAddTextStyles}>Add new phone number</Text>
      </TouchableOpacity>
      <View
        style={{
          marginBottom: 15,
          display: click2AddPhoneNum ? 'flex' : 'none',
        }}>
        <Text style={Styles.titleEntries}>PHONE NUMBER(ALTERNATIVE)</Text>
        <Controller
          control={control}
          defaultValue={data.alternativePhoneData}
          name="alternativePhoneData"
          render={({onChange, onBlur, value}) => (
            <PhoneInput
              containerStyle={{marginTop: 10}}
              ref={phoneInput2}
              defaultValue={value ? value.phoneNumber : null}
              defaultCode={value ? value.countryCode : 'PT'}
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
        {errors.alternativePhoneData && (
          <Text style={{color: 'red'}}>
            {errors.alternativePhoneData.message}
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={Styles.removeAddContainer(click2AddPhoneNum)}
        onPress={() => {
          setClick2AddPhoneNum(false);
          setValue('alternativePhoneData', null);
          if (phoneInput2.current) phoneInput2.current.state['number'] = '';
          clearErrors('phoneData');
        }}>
        <RemovePhoneIcon />
        <Text style={Styles.removeAddTextStyles}>Remove phone number</Text>
      </TouchableOpacity>
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>ADDRESS</Text>
        <Controller
          control={control}
          name="address"
          defaultValue={data.address}
          render={({onChange, onBlur, value}) => (
            <TextInput
              editable={isEditable}
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
          defaultValue={data.companyName}
          name="companyName"
          render={({onChange, onBlur, value}) => (
            <TextInput
              editable={isEditable}
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
      <View style={{marginBottom: 15}}>
        <Text style={Styles.titleEntries}>COMPANY POSITION</Text>
        <Controller
          control={control}
          name="role"
          defaultValue={data.role}
          render={({onChange, onBlur, value}) => (
            <TextInput
              editable={isEditable}
              style={Styles.textInputStyles}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.role && <Text style={{color: 'red'}}>This is required.</Text>}
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
            defaultValue={data.companyLogo}
            render={({onChange, onBlur, value}) => (
              <PhotoPicker
                onChange={(image) => {
                  onChange(image);
                }}
                data={value}
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
          defaultValue={data.observations}
          render={({onChange, onBlur, value}) => (
            <TextInput
              editable={isEditable}
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
            defaultValue={data.linkedInLink}
            render={({onChange, onBlur, value}) => (
              <TextInput
                editable={isEditable}
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
            defaultValue={data.facebookLink}
            render={({onChange, onBlur, value}) => (
              <TextInput
                editable={isEditable}
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
            defaultValue={data.instagramLink}
            render={({onChange, onBlur, value}) => (
              <TextInput
                editable={isEditable}
                style={Styles.textInputStyles}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
        </View>
      </View>
      {data.name && (
        <View style={{marginBottom: 15}}>
          <Text style={Styles.titleEntries}>DELETE CARD</Text>
          <TouchableOpacity onPress={onDeleteCard}>
            <DeleteCard style={{alignSelf: 'center', marginTop: 10}} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default CardForm;
