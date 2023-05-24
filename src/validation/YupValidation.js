import * as yup from "yup";

const YupValidation = yup.object().shape({
  username: yup
    .string()
    .min(5, "Login should be at least 5 characters")
    .max(20, "Login should be maximum 20 characters")
    .required("Enter your login"),

  email: yup
    .string()
    .email("Enter a valid e-mail")
    .required("Enter your e-mail"),

  password: yup
    .string()
    .required("Enter your password")
    .min(8, "Password should be at least 8 character"),

  password2: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not matched")
    .required("Confirm your password"),
});

export default YupValidation;
