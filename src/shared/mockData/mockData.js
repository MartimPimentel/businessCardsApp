import {photo1} from './photosBase64/photo1';
import {logo1} from './photosBase64/logo1';
export const data = [
  {
    name: 'Bill Gates',
    phoneData: {
      phoneNumber: '2027953213',
      callingCode: '1',
      countryCode: 'US',
    },
    address: '11 Times Square, New York, NY 10036, Estados Unidos',
    companyName: 'Microsoft Corporation',
    companyLogo: {data: logo1, mime: 'image/jpeg'},
    facebookLink: 'bla',
    instagramLink: 'bla',
    linkedInLink: 'bla',
    profilePhoto: {data: photo1, mime: 'image/jpeg'},
    email: 'billGates@Microsoft.com',
    observations: 'The best programmer alive',
  },
  {
    name: 'Martim Bello',
    phoneData: {
      phoneNumber: '917720666',
      callingCode: '351',
      countryCode: 'PT',
    },
    address: 'Rua dos Panucas 200, Estremoz',
    companyName: 'M&M Mobile Solutions',
    companyLogo: 'bla',
    facebookLink: 'bla',
    instagramLink: 'bla',
    linkedInLink: 'bla',
    profilePhoto: 'bla',
    email: 'panuca@mail.com',
    observations: 'The wannabe best programmer alive...',
  },
];
