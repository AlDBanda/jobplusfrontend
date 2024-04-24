export const parseErrors = (err) => {
  //check if the error is a validation error
  if (err?.response?.data?.error?.name === 'ValidationError'){
    return {
      message: err.response.data.error.message,
      details: err.response.data.error.details,
    }
  }
};