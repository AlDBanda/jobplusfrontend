export const parseErrors = (err) => {
  //check if the error is a validation error
  if (err?.response?.data?.error?.name === 'ValidationError'){
    return {
      message: err.response.data.error.message,
      details: err.response.data.error.details,
    }
  }

  //check if it a network error
  if (err?.message === "Network Error") {
    return {
      message: "unable to connect to the server endpoint provided",
      details: []
    }
  }
};