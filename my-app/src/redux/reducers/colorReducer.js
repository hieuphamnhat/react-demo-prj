const initialState = 'red';

/**
 * Reducer xử lý thay đổi màu
 * @param {*} state
 * @param {*} action
 * @returns
 */
export default function colorReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_COLOR':
            console.log(state)
            state = action.payload;
            console.log(state)
            return state;
        default:
            return state;
    }
}