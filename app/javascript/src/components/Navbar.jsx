import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
          Referral Tracker
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
