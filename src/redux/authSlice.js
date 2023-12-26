import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import AxiosInstance from "./../axios.js";
import axios from "axios";

const initialState = {
    user: {
        isLoggedin: false,
        token: null,
    },
    signup: {
        loading: false,
        success: false,
        error: null,
    },
    signin: {
        loading: false,
        success: false,
        error: null,
    },
};

export const signupAsync = createAsyncThunk(
    "auth/signupAsync",
    async (userData, { dispatch }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', userData)
            dispatch(signupSuccess(response.data));
        } catch (error) {
            console.log(error);
            return Promise.reject(error); 
        };
    }
);

export const signinAsync = createAsyncThunk(
    "auth/signinAsync",
    async (userData, { dispatch }) => {
        try {
            console.log("signinAsync");
            console.log(userData);
            const response = await axios.post('http://localhost:5000/api/auth/login', userData)
            dispatch(signinSuccess(response.data));
        } catch (error) {
            console.log(error);
            return Promise.reject(error); 
        };
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signupSuccess: (state, action) => {
            state.user.isLoggedin = true;
            state.user.token = action.payload.token;
        },
        signupReset: (state) => {
            state.signup.loading = false;
            state.signup.success = false;
            state.signup.error = null;
            state.user.isLoggedin = false;
            state.user.token = null;
        },
        
        signinSuccess: (state, action) => {
            state.user.isLoggedin = true;
            state.user.token = action.payload.token;
        },
        signinReset: (state) => {
            state.signin.loading = false;
            state.signin.success = false;
            state.signin.error = null;
            state.user.isLoggedin = false;
            state.user.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupAsync.pending, (state) => {
                state.signup.loading = true;
            })
            .addCase(signupAsync.fulfilled, (state) => {
                state.signup.loading = false;
                state.signup.success = true;
                state.signup.error = null;
            })
            .addCase(signupAsync.rejected, (state, action) => {
                state.signup.loading = false;
                state.signup.success = false;
                state.signup.error = action.error;
              // console.log(action.error);
            })
            .addCase(signinAsync.pending, (state) => {
                state.signin.loading = true;
            })
            .addCase(signinAsync.fulfilled, (state) => {
                state.signin.loading = false;
                state.signin.success = true;
                state.signin.error = null;
            })
            .addCase(signinAsync.rejected, (state, action) => {
                state.signin.loading = false;
                state.signin.success = false;
                state.signin.error = action.error;
            });
    }
});

export const {
    signupSuccess,
    signupReset,
    signinSuccess,
    signinReset,
} = authSlice.actions;

export default authSlice.reducer;
