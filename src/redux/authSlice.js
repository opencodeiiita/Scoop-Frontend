import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import AxiosInstance from "./../axios.js";
import axios from "axios";

const initialState = {
    user: {
        isLoggedin: false,
        token: null,
        data: null,
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

// Source: https://stackoverflow.com/a/38552302/8096928
// Help: Github ID: @revosw
export function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
        })
        .join("")
    );
  
    return JSON.parse(jsonPayload);
}

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
            state.user.data = parseJwt(action.payload.token);
        },
        signupReset: (state) => {
            state.signup.loading = false;
            state.signup.success = false;
            state.signup.error = null;
            state.user.isLoggedin = false;
            state.user.token = null;
            state.user.data = null;
        },
        
        signinSuccess: (state, action) => {
            state.user.isLoggedin = true;
            state.user.token = action.payload.token;
            state.user.data = parseJwt(action.payload.token);
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        signinReset: (state) => {
            state.signin.loading = false;
            state.signin.success = false;
            state.signin.error = null;
            state.user.isLoggedin = false;
            state.user.token = null;
            state.user.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupAsync.pending, (state) => {
                state.signup.loading = true;
                state.signup.success = false;
                state.signup.error = null;
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
            })
            .addCase(signinAsync.pending, (state) => {
                state.signin.loading = true;
                state.signin.success = false;
                state.signin.error = null;
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
