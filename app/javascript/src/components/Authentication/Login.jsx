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

import { INITIAL_VALUES, VALIDATION_SCHEMA } from "constants/Login";
import { ContentStyle, RootStyle, HeadingStyle } from "styles/authentication";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    VALIDATION_SCHEMA,
    onSubmit: values => {
      console.log("submitting...");
      console.log(values);
    },
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
            Don’t have an account?
            <span> Sign up</span>
            {/* Signup should be a link */}
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
