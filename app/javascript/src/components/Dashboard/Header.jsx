import React from "react";

import { Stack, Typography, Button, Container } from "@mui/material";
import { useState } from "react";
import InviteUserModal from "./InviteUserModal";

const Header = () => {
  const firstName = "Devu";
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  return (
    <>
    <Stack sx={{margin: 3}} alignItems="center" direction="row" justifyContent="space-between">
      <Typography variant="h4">Welcome {firstName},</Typography>
      <Button variant="outlined" onClick={() => setIsModalOpen(true)}>Invite User</Button>
    </Stack>
    { isModalOpen &&
    <InviteUserModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    }
    </>
  );
};

export default Header;
