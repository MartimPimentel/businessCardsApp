import SInfo from 'react-native-sensitive-info';

export const getFromStore = async (item) => {
  try {
    const retrieved = await SInfo.getItem(item, {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
    console.log('retrieved: ' + retrieved);
    return retrieved;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const storeItems = async (item, data) => {
  try {
    await SInfo.setItem(item, data, {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
  } catch (e) {
    console.log('error storing item->', e);
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
