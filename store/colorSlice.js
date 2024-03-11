import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
  };

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;

};

export const myColorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        setColor: (state) => {
            state.value = [...state.value, randomRGB()];
        },
    },

});

export const {setColor} = myColorSlice.actions;

export default myColorSlice.reducer;