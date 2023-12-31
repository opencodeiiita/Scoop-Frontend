// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from "./redux/authSlice";
import scoopReducer from "./redux/scoopSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  scoop: scoopReducer,
  
});

export default rootReducer;
