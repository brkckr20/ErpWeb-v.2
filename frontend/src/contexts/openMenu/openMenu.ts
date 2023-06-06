import { createSlice } from "@reduxjs/toolkit";

export interface MenuState{
    name: string,
    key: number | string;
    path : string
}

const initialState: MenuState[] = [
    {
        key: 1,
        name: "Sarf Malzeme Giriş",
        path : "/sarfmalzemegiris"
    },
    {
        key: 2,
        name: "Sarf Malzeme Çıkış",
        path : "/sarfmalzemecikis"
    },
    {
        key: 5,
        name: "Sarf Malzeme Çıkış",
        path : "/sarfmalzemecikis"
    },
    {
        key: 7,
        name: "Sarf Malzeme Çıkış",
        path : "/sarfmalzemecikis"
    },
    {
        key: 8,
        name: "Sarf Malzeme Çıkış",
        path : "/sarfmalzemecikis"
    },
]

export const openMenuSlice = createSlice({
    initialState,
    name: "openMenu",
    reducers: {},
    extraReducers:{}
})

export default openMenuSlice.reducer;