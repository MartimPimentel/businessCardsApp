import * as yup from 'yup';

export const checkHttps = (url) => {
  if (!url) {
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

export const formSchema = (phoneInput, phoneInput2) => {
  return yup.object().shape({
    name: yup.string().required('*Required').nullable(),
    email: yup
      .string()
      .required('*Required')
      .email('*Invalid email address')
      .nullable(),
    phoneData: yup
      .object()
      .nullable()
      .test('isValidNumber', '*Invalid number', function (value) {
        return (
          !value ||
          !value.phoneNumber ||
          phoneInput.current.isValidNumber(
            value.callingCode + value.phoneNumber,
          )
        );
      })
      .test('checkField2', '*Must fill this field first', function (value) {
        return !(
          (!value || !value.phoneNumber) &&
          this.parent.alternativePhoneData &&
          !!this.parent.alternativePhoneData.phoneNumber
        );
      }),
    alternativePhoneData: yup
      .object()
      .nullable()
      .test('isValidNumber', '*Invalid number', function (value) {
        return (
          !value ||
          !value.phoneNumber ||
          phoneInput2.current.isValidNumber(
            value.callingCode + value.phoneNumber,
          )
        );
      }),
    address: yup.string().nullable(),
    companyName: yup.string().nullable(),
    linkedInLink: yup.string().nullable(),
    facebookLink: yup.string().nullable(),
    instagramLink: yup.string().nullable(),
    role: yup.string().nullable(),
  });
};

export const insertDefaultCard = (data) => {
  return {
    name: data.name,
    role: data.role,
    address: data.address,
    companyLogo: data.companyLogo,
    companyName: data.companyName,
    email: data.email,
    facebookLink: data.facebookLink,
    instagramLink: data.instagramLink,
    linkedInLink: data.linkedInLink,
    observations: data.observations,
    phoneData: data.phoneData,
    alternativePhoneData: data.alternativePhoneData,
    profilePhoto: data.profilePhoto,
  };
};
