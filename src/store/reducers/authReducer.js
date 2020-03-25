const initState = {
  authError: null,
};

// reducer passed into store which manipulates the state
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login Error");
      return {
        ...state,
        authError: "Login Failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };

    case "SIGNOUT_SUCCESS":
      console.log("sign out");
      return state;

    case "SIGNUP_SUCCESS": 
    console.log("sign up successful")
    return {
      ...state,
      authError: "success"
    }
    case "SIGNUP_ERROR":
      console.log("signup error HAMZAHHH")
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state;
  }
};

export default authReducer;
