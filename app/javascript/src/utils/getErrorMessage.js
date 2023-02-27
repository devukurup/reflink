export const getErrorMessage = error => {
  if (error?.response?.data?.errors?.full_messages) {
    return error?.response?.data?.errors?.full_messages[0];
  }

  if (typeof error?.response?.data?.errors === "object") {
    return error?.response?.data?.errors[0];
  }

  return "Something went wrong!";
};
