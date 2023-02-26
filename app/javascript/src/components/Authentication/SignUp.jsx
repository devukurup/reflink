import React, { useState } from "react";

import { Icon } from "@iconify/react";
import { LoadingButton } from "@mui/lab";
import {
  Container,
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";

import { INITIAL_VALUES, VALIDATION_SCHEMA } from "constants/SignUp";
import { RootStyle, ContentStyle, HeadingStyle } from "styles/authentication";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: values => {
      console.log(values);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle>
            <Typography sx={{ mb: "10px" }}>Sign up</Typography>
          </HeadingStyle>
          <FormikProvider r value={formik}>
            <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    placeholder="First name"
                    {...getFieldProps("firstName")}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    fullWidth
                    placeholder="Last name"
                    {...getFieldProps("lastName")}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Stack>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    autoComplete="username"
                    placeholder="Email address"
                    type="email"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword(prev => !prev)}
                          >
                            <Icon
                              icon={
                                showPassword
                                  ? "eva:eye-fill"
                                  : "eva:eye-off-fill"
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
                <Box>
                  <LoadingButton
                    fullWidth
                    loading={isSubmitting}
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up
                  </LoadingButton>
                </Box>
              </Stack>
            </Form>
          </FormikProvider>
          <Typography align="center" sx={{ mt: 3 }} variant="body2">
            Have an account?{" "}
            {/* <Link variant="subtitle2" component={RouterLink} to="/login">
              Login
            </Link> */}
            {/* Add a link to Login page */}
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default SignUp;
