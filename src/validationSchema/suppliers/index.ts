import * as yup from 'yup';

export const supplierValidationSchema = yup.object().shape({
  name: yup.string().required(),
  contact_number: yup.string().nullable(),
  address: yup.string().nullable(),
  email: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
