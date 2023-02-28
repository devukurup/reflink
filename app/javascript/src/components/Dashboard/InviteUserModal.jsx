import { Box, Modal, TextField, Typography, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import { style } from 'styles/Modal';

const InviteUserModal = ({ isModalOpen, setIsModalOpen }) => {
  const [email, setEmail] = useState("");
const handleInvite = () => {
  // try{

  // }
  // catch(error) {

  // }
  // finally {
  //   setIsModalOpen(false);
  // }
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
