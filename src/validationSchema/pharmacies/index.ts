import * as yup from 'yup';

export const pharmacyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  contact_number: yup.string().nullable(),
  opening_hours: yup.string().nullable(),
  closing_hours: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
