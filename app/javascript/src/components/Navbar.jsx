import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { resetAuthTokens } from "apis/axios";
import { useAuth } from "contexts/auth";
import { setToLocalStorage } from "helpers/storage";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  const handleLogout = async () => {
    try {
      setToLocalStorage({
        authToken: null,
        email: null,
        userId: null,
        client: null,
      });
      resetAuthTokens();
      setTimeout(() => (window.location.href = "/"), 2000);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
            Referral Tracker
          </Typography>
          {isLoggedIn && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
