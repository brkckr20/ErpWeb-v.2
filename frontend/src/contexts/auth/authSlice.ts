import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import {BASE_URL} from '../../config'

interface LoginData {
    kullaniciAdi: string;
    sifre: string;
}

export const login = createAsyncThunk('auth/login', async (loginData: LoginData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${BASE_URL}/giris`, loginData);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    error: string | null;
    user: string | null;
    loading: boolean;
    status: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: localStorage.getItem('token') || null,
    error: null,
    user: localStorage.getItem('kullanici') ? JSON.parse(localStorage.getItem('kullanici')!) : null,
    loading: false,
    status : null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.status === "warn") {
                state.error = action.payload.mesaj;
                state.status = action.payload.status;
                return;
            }
            state.isAuthenticated = true;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('kullanici', JSON.stringify(action.payload.user));
            state.loading = false;
            state.user = action.payload.user;
            state.status = action.payload.message
            
        })
    },
})

export default authSlice.reducer

// export const selectAuth = (state: RootState) => state.auth;
