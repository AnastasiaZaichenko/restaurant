import * as Yup from "yup";
export const TABLE_TEMPLATE = /^\d{1,2}$/;
export const validationSchemaTable = Yup.object({
  number: Yup.string()
    .max(2, "Must be <= 2 numbers")
    .matches(TABLE_TEMPLATE, "Must be <= 2 numbers")
    .required("Please fill out the form"),
});
