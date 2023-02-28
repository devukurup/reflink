import axios from "axios";

const create = payload => axios.post("/users/", payload);

const login = payload => axios.post("/users/sign_in", payload);

const logout = () => axios.delete("/users/sign_out");

const fetchInvitedUsers = () => axios.get("/users");

const show = (id) => axios.get(`/users/${id}`);

const usersApi = { create, login, logout, fetchInvitedUsers, show };

export default usersApi;
