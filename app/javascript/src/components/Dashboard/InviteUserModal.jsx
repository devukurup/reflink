import { Box, Modal, TextField, Typography, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import { style } from 'styles/Modal';
import invitationApi from "apis/invite";
import { useSnackbar } from "notistack";

const InviteUserModal = ({ isModalOpen, setIsModalOpen, fetchInvitedUsers }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
const handleInvite = async () => {
  try{
    const response = await invitationApi.create({email});
    enqueueSnackbar(response?.data?.notice, { variant: "success" });
    fetchInvitedUsers();
  }
  catch(error) {
    console.log(error);
    enqueueSnackbar(error?.response?.data?.error, { variant: "error" });
  }
  finally {
    setIsModalOpen(false);
  }
}

  return (
    <Modal
    open={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    >
<Box sx={style}>
  <Stack direction="column" spacing={2}>
  <Typography variant="h5" component="h2">
    Invite User
  </Typography>
    <TextField
     fullWidth
     placeholder="Email"
     type="email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}/>

     <Stack spacing={1} direction="row" justifyContent="flex-end" alignItems="center">
     <Button variant="text" onClick={() => setIsModalOpen(false)}>
       Cancel
     </Button>
     <Button  variant="contained" onClick={() => handleInvite()}>
       Invite
     </Button>
     </Stack>
     </Stack>
</Box>
    </Modal>
  )
}

export default InviteUserModal;
