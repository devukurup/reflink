import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvitedUsersTable from "./Table";
import usersApi from 'apis/users';

const Dashboard = () => {
  const [ rowData, setRowData ] = useState([]);
  const fetchInvitedUsers = async () => {
    try{
      const { data } = await usersApi.fetchInvitedUsers();
      setRowData(data?.users);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchInvitedUsers();
  }, []);


return (
  <>
 <Header fetchInvitedUsers={fetchInvitedUsers} />
<InvitedUsersTable rowData={rowData}/>
</>
);
};

export default Dashboard;
