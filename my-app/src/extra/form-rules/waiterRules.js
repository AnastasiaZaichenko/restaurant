import * as Yup from "yup";
export const PHONE_TEMPLATE = /^\d{3}-\d{3}-\d{4}$/;
export const FIRST_NAME_TEMPLATE = /^[A-Z]{1}[a-z]{2,20}$/;

export const validationSchemaWaiter = Yup.object({
  firstName: Yup.string()
    .max(20, "Must be <= 20 characters")
    .matches(FIRST_NAME_TEMPLATE, "Must be <= 20 numbers")
    .required("Please fill out the form"),
  phone: Yup.string()
    .matches(PHONE_TEMPLATE, "Must be xxx-xxx-xxxx")
    .required("Please fill out the form"),
});
