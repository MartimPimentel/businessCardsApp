import SInfo from 'react-native-sensitive-info';
export const getToken = async () => {
  try {
    const key = await SInfo.getItem('token', {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
    console.log('key: ' + key);
    return key;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deleteToken = async () => {
  return await SInfo.deleteItem('token', {
    sharedPreferencesName: 'bussinessCards',
    keychainService: 'bussinessCards',
  });
};

export const parseData = (data) => {
  const keys = [
    'phoneData',
    'alternativePhoneData',
    'companyLogo',
    'profilePhoto',
  ];
  const parsedData = [...data];
  parsedData.forEach((card, idx) => {
    keys.forEach((key) => {
      if (card[key]) {
        parsedData[idx][key] = JSON.parse(card[key]);
      }
    });
  });
  return parsedData;
};
