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

export const signupAsync = createAsyncThunk(
    "auth/signupAsync",
    async (userData, { dispatch }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', userData)
            dispatch(signupSuccess(response.data));
        } catch (error) {
            console.log("before signupError"); console.log(error)
            dispatch(signupError(error))
                .then(() => {
                    console.log("After signupError")
                    return Promise.reject(error)
                })
        };
    }
);

export const signinAsync = createAsyncThunk(
    "auth/signinAsync",
    async (userData, { dispatch }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', userData)
            dispatch(signinSuccess(response.data));
        } catch (error) {
            console.log("before signinError")
            dispatch(signinError(error.response.data.msg))
                .then(() => {
                    console.log("After signinError")
                    return Promise.reject(error)
                })
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
        signupError: (state, action) => {
            console.log("action.payload", action)
            state.signup.error = action.payload;
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
        signinError: (state, action) => {
            console.log("before inside signinError")
            console.log("action.payload", action.payload)
            state.signin.error = action.payload;
            console.log("after inside signinError")
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
            });
    }
});

export const {
    signupSuccess,
    signupReset,
    signupError,
    signinSuccess,
    signinReset,
    signinError,
} = authSlice.actions;

export default authSlice.reducer;
