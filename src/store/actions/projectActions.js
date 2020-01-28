export const createProject = project => {
  // returning a function which is halting a dispatch
  return (dispatch, getState) => {
      // make async call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
