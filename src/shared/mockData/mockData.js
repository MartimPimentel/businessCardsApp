import {photo1} from './photosBase64/photo1';
import {logo1} from './photosBase64/logo1';
export const data = [
  {
    name: 'Bill Gates',
    companyPosition: 'CEO & Co-Founder',
    phoneData: {
      phoneNumber: '2027953213',
      callingCode: '1',
      countryCode: 'US',
    },
    phoneData2: {
      phoneNumber: '2027953200',
      callingCode: '1',
      countryCode: 'US',
    },
    address: '11 Times Square, New York, NY 10036, Estados Unidos',
    companyName: 'Microsoft Corporation',
    companyLogo: {data: logo1, mime: 'image/jpeg'},
    facebookLink: 'http://www.facebook.com',
    instagramLink: 'https://www.instagram.com',
    linkedInLink: 'https://www.linkedIn.com',
    profilePhoto: {data: photo1, mime: 'image/jpeg'},
    email: 'billGates@Microsoft.com',
    observations: 'The best programmer alive',
  },
  {
    name: 'Martim Bello',
    companyPosition: 'Panusca',
    phoneData: {
      phoneNumber: '917720666',
      callingCode: '351',
      countryCode: 'PT',
    },
    phoneData2: {
      phoneNumber: '917700000',
      callingCode: '351',
      countryCode: 'PT',
    },
    address: 'Rua dos Panucas 200, Estremoz',
    companyName: 'M&M Mobile Solutions',
    companyLogo: 'bla',
    facebookLink: 'bla',
    instagramLink: 'bla',
    linkedInLink: 'bla',
    profilePhoto: '',
    email: 'panuca@mail.com',
    observations: 'The wannabe best programmer alive...',
  },
];
