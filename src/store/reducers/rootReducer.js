import authReducer from "./authReducer";
import campaignReducer from "./campaignReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
