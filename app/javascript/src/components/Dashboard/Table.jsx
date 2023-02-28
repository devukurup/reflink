import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { ROW_DATA, COLUMN_DATA } from 'constants/Table';
import { Box } from '@mui/material';

const InvitedUsersTable = () => (
  <Box sx={{ height: 500, padding: 20, margin: 'auto'}}>
    <DataGrid columns={COLUMN_DATA} rows={ROW_DATA} />
</Box>
)

export default InvitedUsersTable;
