import * as yup from 'yup';

export const schema = yup
  .object({
    fullname: yup.string().required(),
    age: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    city: yup.string().required(),
  })
  .required();
