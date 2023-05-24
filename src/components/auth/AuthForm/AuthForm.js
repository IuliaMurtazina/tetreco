import React from "react";
import classes from "./AuthForm.module.scss";
import { Form, Formik, ErrorMessage } from "formik";
import { Button, TextField, Checkbox } from "@mui/material";
import Icon from "@/components/ui/icons/Icon";
import Link from "next/link";
import AuthBottom from "./AuthBottom/AuthBottom";
import { useDispatch, useSelector } from "react-redux";
import AuthActions from "./AuthActions/AuthActions";
import RestorePassword from "./RestorePassword/RestorePassword";
import { SET_IS_AUTH_POPUP_CLOSE } from "@/store/reducers/ui";
import YupValidation from "../../../validation/YupValidation";

const AuthForm = ({ tablet }) => {
  const authMode = useSelector((state) => state.ui.authMode);
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    username: "",
    password: "",
    password2: "",
  };

  return (
    <div className={classes.container}>
      <span className={classes.heading}>{authMode}</span>
      {tablet && (
        <Button
          className={classes.close}
          onClick={() => dispatch(SET_IS_AUTH_POPUP_CLOSE())}
        >
          <Icon iconId="close" />
        </Button>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={YupValidation}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => {
          return (
            <Form className={classes.form}>
              {authMode === "Sign up" && (
                <TextField
                  variant="outlined"
                  label="E-mail"
                  name="email"
                  size="s-m"
                  type="email"
                  helperText={<ErrorMessage name="email" />}
                  error={props.errors.email && props.touched.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              )}
              <TextField
                variant="outlined"
                label="Login"
                size="s-m"
                name="username"
                helperText={<ErrorMessage name="username" />}
                error={props.errors.username && props.touched.username}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              <TextField
                variant="outlined"
                label="Password"
                size="s-m"
                type="password"
                name="password"
                helperText={<ErrorMessage name="password" />}
                error={props.errors.password && props.touched.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />

              {authMode === "Sign up" && (
                <TextField
                  variant="outlined"
                  label="Confirm password"
                  size="s-m"
                  type="password"
                  name="password2"
                  helperText={<ErrorMessage name="password2" />}
                  error={props.errors.password2 && props.touched.password2}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              )}

              {authMode === "Sign up" && (
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
              )}

              {authMode === "Log in" && !tablet && <RestorePassword />}
              <AuthActions />
            </Form>
          );
        }}
      </Formik>

      {!tablet && authMode === "Sign up" && <AuthBottom />}
    </div>
  );
};

export default AuthForm;
