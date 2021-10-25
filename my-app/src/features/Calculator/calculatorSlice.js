import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: 1,
    reducers: {
        add(state, action){
            return state + 2;
        },
        minus(state, action){
            return state - 2;
        },
        multi(state, action){
            return state * 2;
        },
        divide(state, action){
            return state / 2 ;
        }
    }
})

const {actions, reducer} = calculatorSlice;
export const {add, minus, multi, divide} = actions;
export default reducer;