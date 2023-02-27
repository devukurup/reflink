import * as Yup from "yup";

export const VALIDATION_SCHEMA = Yup.object().shape({
  first_name: Yup.string().required("First name required"),
  last_name: Yup.string().required("Last name required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
});

export const INITIAL_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
};
