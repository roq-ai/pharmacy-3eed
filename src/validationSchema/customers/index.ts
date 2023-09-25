import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  first_name: yup.string().nullable(),
  last_name: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  address: yup.string().nullable(),
  email: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
