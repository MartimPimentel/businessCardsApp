import * as yup from 'yup';

export const formSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .required('*Required')
      .email('*Invalid email address')
      .nullable(),
  });
};
