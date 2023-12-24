import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import AxiosInstance from "./../axios.js";
import axios from "axios";

const defaultUser = {
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    Password: "",
    isAdmin: true,
    myUpvotes: 0,
    News: [],
};

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
        dispatch(signupRequest());
        try {

            const completeUser = { ...defaultUser, ...userData };
            console.log("after signup request")
            // const response = await AxiosInstance.get('/api/auth/register');
            const response = axios.post('http://localhost:5000/api/auth/login', completeUser)
            console.log("after signup response")
            dispatch(signupSuccess(response.data));
            console.log("after signup success");
        } catch (error) {
            console.log("after signup fail");
            dispatch(signupFail(error.message));
        };
    }
);

export const signinAsync = createAsyncThunk(
    "auth/signinAsync",
    async (userData, { dispatch }) => {
        // dispatch(signinRequest());
        try {
            const completeUser = { ...defaultUser, ...userData };

            // const response = await AxiosInstance.post('/api/auth/login', completeUser);
            axios.post('http://localhost:5000/api/auth/login', completeUser)
            // dispatch(signinSuccess(response.data));
        } catch (error) {
            // dispatch(signinFail(error.message));
        };
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signupRequest: (state) => {
            state.signup.loading = true;
        },
        signupSuccess: (state, action) => {
            state.signup.loading = false;
            state.signup.success = true;
            state.signup.error = null;
            state.user.isLoggedin = true;
            state.user.token = action.payload.token;
        },
        signupFail: (state, action) => {
            state.signup.loading = false;
            state.signup.success = false;
            state.signup.error = action.payload;
        },
        signupReset: (state) => {
            state.signup.loading = false;
            state.signup.success = false;
            state.signup.error = null;
            state.user.isLoggedin = false;
            state.user.token = null;
        },

        signinRequest: (state) => {
            state.signin.loading = true;
        },
        signinSuccess: (state, action) => {
            state.signin.loading = false;
            state.signin.success = true;
            state.signin.error = null;
            state.user.isLoggedin = true;
            state.user.token = action.payload.token;
        },
        signinFail: (state, action) => {
            state.signin.loading = false;
            state.signin.success = false;
            state.signin.error = action.payload;
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
                console.log("signupRequest");
            })
            .addCase(signupAsync.fulfilled, (state, action) => {
                console.log("signupSuccess");
                state.signup.loading = false;
                state.signup.success = true;
                state.signup.error = null;
                state.user.isLoggedin = true;
                state.user.token = action.payload.token;
            })
            .addCase(signupAsync.rejected, (state, action) => {
                console.log("signupFail");
                state.signup.loading = false;
                state.signup.success = false;
                state.signup.error = action.payload;
            })
            .addCase(signinAsync.pending, (state) => {
                state.signin.loading = true;
            })
            .addCase(signinAsync.fulfilled, (state, action) => {
                state.signin.loading = false;
                state.signin.success = true;
                state.signin.error = null;
                state.user.isLoggedin = true;
                state.user.token = action.payload.token;
            })
            .addCase(signinAsync.rejected, (state, action) => {
                state.signin.loading = false;
                state.signin.success = false;
                state.signin.error = action.payload;
            });
    }
});

export const {
    signupRequest,
    signupSuccess,
    signupFail,
    signupReset,
    signinRequest,
    signinSuccess,
    signinFail,
    signinReset,
} = authSlice.actions;

export default authSlice.reducer;
