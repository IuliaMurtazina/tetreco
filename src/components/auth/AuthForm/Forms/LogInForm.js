import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import AuthActions from "../AuthActions/AuthActions";
import RestorePassword from "../RestorePassword/RestorePassword";
import YupValidation from "@/validation/YupValidation";
import classes from "./Form.module.scss";

const LogInForm = ({ tablet }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YupValidation}
      onSubmit={(values) => console.log(values)}
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

            {!tablet && <RestorePassword />}
            <AuthActions />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
