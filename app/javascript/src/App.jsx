import React, { useState, useEffect } from "react";

import { Typography } from "@mui/material";

import Login from "components/Authentication/Login";

import { setAuthHeaders } from "./apis/axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAuthHeaders(setIsLoading);
  }, []);

  if (isLoading) {
    return <Typography>Loading....</Typography>;
  }

  return <Login />;
};

export default App;
