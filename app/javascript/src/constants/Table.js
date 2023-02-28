import React from 'react';
import { Typography } from "@mui/material";
import { blueGrey, green } from '@mui/material/colors';

export const COLUMN_DATA = [
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "invitation_status",
    headerName: "Invitation Status",
    flex: 1,
    renderCell: params =>
      params.invitation_status?.includes("accepted") ?
        (<Typography
          sx={{ borderRadius: '8px', padding: 0.5, color: green[50], backgroundColor: green[500] }}
        >
          Accepted
        </Typography>
      ) : (
        <Typography
          sx={{ borderRadius: '8px', padding: 0.5, color: blueGrey[50], backgroundColor: blueGrey[500] }}
        >
          Pending
        </Typography>
    )
  },
];

export const ROW_DATA = [
  {
    id: 1,
    email: "abc@gmail.com",
    invitation_status: "accepted",
  },
  {
    id: 2,
    email: "bcd@gmail.com",
    invitation_status: "pending",
  },
  {
    id: 3,
    email: "abc@gmail.com",
    invitation_status: "accepted",
  },
  { id: 4, email: "bcd@gmail.com", invitation_status: "pending" },
  { id: 5, email: "abc@gmail.com", invitation_status: "accepted" },
  { id: 6, email: "bcd@gmail.com", invitation_status: "pending" },
  { id: 7, email: "abc@gmail.com", invitation_status: "accepted" },
  { id: 8, email: "bcd@gmail.com", invitation_status: "pending" },
  { id: 9, email: "abc@gmail.com", invitation_status: "accepted" },
  { id: 10, email: "bcd@gmail.com", invitation_status: "pending" },
];
