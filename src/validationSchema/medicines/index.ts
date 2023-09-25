import * as yup from 'yup';

export const medicineValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  manufacturer: yup.string().nullable(),
  expiry_date: yup.date().nullable(),
  quantity: yup.number().integer().nullable(),
  pharmacy_id: yup.string().nullable().required(),
});
