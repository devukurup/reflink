import React, { useState } from "react";

import { Icon } from "@iconify/react";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

import { setAuthHeaders } from "apis/axios";
import usersApi from "apis/users";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "constants/Login";
import { LOGIN_SUCCESS_MESSAGE } from "constants/ToastrMessages";
import { setToLocalStorage } from "helpers/storage";
import { ContentStyle, RootStyle, HeadingStyle } from "styles/authentication";
import { getErrorMessage } from "utils/getErrorMessage";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = async values => {
    try {
      const response = await usersApi.login(values);
      const { data, headers } = response;
      setToLocalStorage({
        authToken: headers["access-token"],
        client: headers?.client,
        email: data?.data?.email,
        userId: data?.data?.id,
      });
      setAuthHeaders();
      setAuthHeaders();
      setTimeout(() => (window.location.href = "/"), 2000);
      enqueueSnackbar(LOGIN_SUCCESS_MESSAGE, { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(getErrorMessage(error), { variant: "error" });
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    VALIDATION_SCHEMA,
    onSubmit: handleLogin,
  });

  const { errors, touched, isSubmitting, getFieldProps } = formik;

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle>
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Login
            </Typography>
          </HeadingStyle>
          <FormikProvider value={formik}>
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Email Address"
                  type="email"
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(prev => !prev)}
                        >
                          {showPassword ? (
                            <Icon icon="eva:eye-fill" />
                          ) : (
                            <Icon icon="eva:eye-off-fill" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <LoadingButton
                  fullWidth
                  loading={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  {isSubmitting ? "loading..." : "Login"}
                </LoadingButton>
              </Box>
            </Form>
          </FormikProvider>
          <Typography align="center" sx={{ mt: 3 }} variant="body2">
            Don’t have an account?{" "}
            <Link to="/signup">
              <Typography display="inline">Sign up</Typography>
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
