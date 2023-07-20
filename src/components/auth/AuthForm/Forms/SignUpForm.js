import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { TextField, Checkbox } from "@mui/material";
import AuthActions from "../AuthActions/AuthActions";
import Icon from "@/components/ui/icons/Icon";
import Link from "next/link";
import YupValidation from "@/validation/YupValidation";
import classes from "./Form.module.scss";

const SignUpForm = () => {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    password2: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YupValidation}
      // onSubmit={(values) => console.log(values)}
    >
      {(props) => {
        const addTextFieldProps = {
          variant: "outlined",
          size: "s-m",
          onChange: props.handleChange,
          onBlur: props.handleBlur,
        };

        return (
          <Form className={classes.form}>
            <TextField
              label="E-mail"
              name="email"
              type="email"
              helperText={<ErrorMessage name="email" />}
              error={props.errors.email && props.touched.email}
              {...addTextFieldProps}
            />
            <TextField
              label="Login"
              name="username"
              helperText={<ErrorMessage name="username" />}
              error={props.errors.username && props.touched.username}
              {...addTextFieldProps}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              helperText={<ErrorMessage name="password" />}
              error={props.errors.password && props.touched.password}
              {...addTextFieldProps}
            />
            <TextField
              label="Confirm password"
              type="password"
              name="password2"
              helperText={<ErrorMessage name="password2" />}
              error={props.errors.password2 && props.touched.password2}
              {...addTextFieldProps}
            />

            <div className={classes.checkbox}>
              <Checkbox
                size="medium"
                icon={<Icon iconId="check" />}
                checkedIcon={<Icon iconId="check" />}
                id="signup-agree"
                required
              />
              <label htmlFor="signup-agree">
                Agree with <Link href="/"> the offer</Link> and
                <Link href="/"> personal data processing policy</Link>
              </label>
            </div>

            <AuthActions />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
