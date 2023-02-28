import React, { useEffect } from "react";

import { Stack, Typography, Button } from "@mui/material";
import { useState } from "react";
import InviteUserModal from "./InviteUserModal";
import { getFromLocalStorage } from "helpers/storage";
import usersApi from "apis/users";

const Header = ({ fetchInvitedUsers }) => {
  const [firstName, setFirstName] = useState("");
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const id = getFromLocalStorage('authUserId');

  const fetchCurrentUser = async () => {
    try {
      const { data } = await usersApi.show(id);
      setFirstName(data?.userName);
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetchCurrentUser();
  }, [])

  return (
    <>
    <Stack sx={{margin: 3}} alignItems="center" direction="row" justifyContent="space-between">
      <Typography variant="h4">Welcome {firstName},</Typography>
      <Button variant="outlined" onClick={() => setIsModalOpen(true)}>Invite User</Button>
    </Stack>
    { isModalOpen &&
    <InviteUserModal fetchInvitedUsers={fetchInvitedUsers} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    }
    </>
  );
};

export default Header;
