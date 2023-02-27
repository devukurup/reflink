import React, { useState, useEffect } from "react";

import { Skeleton } from "@mui/material";
import { SnackbarProvider } from "notistack";

import { setAuthHeaders, registerIntercepts } from "apis/axios";
import Main from "components/Main";
import { AuthProvider } from "contexts/auth";
import { RootStyle } from "styles/authentication";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    registerIntercepts();
    setAuthHeaders(setIsLoading);
  }, []);

  if (isLoading) {
    return (
      <RootStyle>
        <Skeleton
          animation="wave"
          height={250}
          variant="circular"
          width={250}
        />
      </RootStyle>
    );
  }

  return (
    <AuthProvider>
      <SnackbarProvider maxSnack={3}>
        <Main />
      </SnackbarProvider>
    </AuthProvider>
  );
};

export default App;
