import * as yup from 'yup';

export const purchaseValidationSchema = yup.object().shape({
  quantity: yup.number().integer().nullable(),
  purchase_date: yup.date().nullable(),
  total_price: yup.number().integer().nullable(),
  medicine_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
