import axios from "axios";

import { setToLocalStorage, getFromLocalStorage } from "helpers/storage";

axios.defaults.baseURL = "/";

const setAuthHeaders = (setLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };
  const token = getFromLocalStorage("authToken");
  const email = getFromLocalStorage("authEmail");
  const client = getFromLocalStorage("authClient");
  if (token && email) {
    axios.defaults.headers["uid"] = email;
    axios.defaults.headers["access-token"] = token;
    axios.defaults.headers["client"] = client;
  }
  setLoading(false);
};

const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
  }

  return response;
};

const handleErrorResponse = axiosErrorObject => {
  if (axiosErrorObject.response?.status === 401) {
    setToLocalStorage({
      authToken: null,
      email: null,
      userId: null,
      client: null,
    });
    setTimeout(() => (window.location.href = "/"), 2000);
  }

  return Promise.reject(axiosErrorObject);
};

const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  );
};

const resetAuthTokens = () => {
  delete axios.defaults.headers["X-Auth-Email"];
  delete axios.defaults.headers["X-Auth-Token"];
};

export { setAuthHeaders, registerIntercepts, resetAuthTokens };
