import * as Yup from "yup";

export const VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required("First name required"),
  lastName: Yup.string().required("Last name required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
