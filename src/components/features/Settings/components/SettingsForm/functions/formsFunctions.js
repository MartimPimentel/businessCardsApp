import * as yup from 'yup';

export const emailFormSchema = () => {
  return yup.object().shape({
    email: yup.string().email('*Invalid email address').required('*Required'),
  });
};

export const passwordFormSchema = () => {
  return yup.object().shape({
    currentPassword: yup.string().required('*Required'),
    newPassword: yup.string().required('*Required'),
    confirmNewPassword: yup
      .string()
      .required('*Required')
      .oneOf([yup.ref('newPassword'), null], '*Password dont match'),
  });
};
