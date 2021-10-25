import { createSlice } from '@reduxjs/toolkit'
let nextItemID = 0;
const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        {
            id: 1,
            name: 'ebook'
        }
    ],
    reducers: {
        //create action
        create: {
            reducer(state, {payload}){
                const { id, name: cartItemName } = payload
                state.push({ id, name: cartItemName })
            },
            prepare(cartItemName) {
                return {
                    payload: {
                        name: cartItemName,
                        id: nextItemID++
                    }
                }
            }
        }
    }
})
const { actions, reducer } = cartSlice
export const { create } = actions
export default reducer