import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { COLUMN_DATA } from 'constants/Table';
import { Box } from '@mui/material';


const InvitedUsersTable = ({ rowData }) => {

  return (
  <Box sx={{ height: 500, padding: 20, margin: 'auto'}}>
    <DataGrid columns={COLUMN_DATA} rows={rowData} />
</Box>
)}

export default InvitedUsersTable;
