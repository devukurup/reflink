import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const INITIAL_VALUES = {
  email: "",
  password: "",
};
