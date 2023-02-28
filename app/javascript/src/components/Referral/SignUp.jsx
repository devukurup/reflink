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
import { useSnackbar } from "notistack";

import invitationApi from "apis/invite.js";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "constants/Referral";
import { SIGN_UP_SUCCESS_MESSAGE } from "constants/ToastrMessages";
import { RootStyle, ContentStyle, HeadingStyle } from "styles/authentication";
import { getErrorMessage } from "utils/getErrorMessage";
import { useLocation } from "react-router-dom";

const ReferralSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const token = query.get("invitation_token");

  const handleInvitedSignup = async values => {
    if(token)
    {try {
      await invitationApi.accept({...values, invitation_token: token});
      enqueueSnackbar(SIGN_UP_SUCCESS_MESSAGE, { variant: "success" });
      setTimeout(() => (window.location.href = "/"), 2000);
    } catch (error) {
      console.log(error);
      enqueueSnackbar(getErrorMessage(error), { variant: "error" });
    }}
    else{
      enqueueSnackbar("Token not found", { variant: "error"})
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values) => handleInvitedSignup(values),
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle>
            <Typography sx={{ mb: "10px" }}>Accept Invitation</Typography>
          </HeadingStyle>
          <FormikProvider r value={formik}>
            <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    placeholder="First name"
                    {...getFieldProps("first_name")}
                    error={Boolean(touched.first_name && errors.first_name)}
                    helperText={touched.first_name && errors.first_name}
                  />
                  <TextField
                    fullWidth
                    placeholder="Last name"
                    {...getFieldProps("last_name")}
                    error={Boolean(touched.last_name && errors.last_name)}
                    helperText={touched.last_name && errors.last_name}
                  />
                </Stack>
                <Stack spacing={3}>
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
                  <TextField
                    fullWidth
                    placeholder="Confirm Password"
                    type="password"
                    {...getFieldProps("password_confirmation")}
                    error={Boolean(
                      touched.password_confirmation &&
                        errors.password_confirmation
                    )}
                    helperText={
                      touched.password_confirmation &&
                      errors.password_confirmation
                    }
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
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default ReferralSignUp;
