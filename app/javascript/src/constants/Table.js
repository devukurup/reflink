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
    renderCell: record =>
      record?.value?.includes("accepted") ?
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
