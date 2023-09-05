import * as Yup from "yup";

export const PRICE_TEMPLATE = /^\d{1,5}$/;

export const validationSchemaDish = Yup.object({
  name: Yup.string()
    .max(30, "Must be <= 30 characters")
    .required("Please fill out the form"),
  description: Yup.string()
    .max(50, "Must be <= 50 characters")
    .required("Please fill out the form"),
  price: Yup.string()
    .max(4, "Must be <= 5 numbers")
    .matches(PRICE_TEMPLATE, "Must be <= 2 numbers")
    .required("Please fill out the form"),
});
