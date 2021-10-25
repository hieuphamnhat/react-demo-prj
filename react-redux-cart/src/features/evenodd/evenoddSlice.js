import { createSlice } from "@reduxjs/toolkit";
export const evenoddSlice = createSlice({
    name: 'evenodd',
    initialState: {
        value: 100
    },
    reducers:{
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state, action) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})
export const { increment, decrement, incrementByAmount } = evenoddSlice.actions
export default evenoddSlice.reducer