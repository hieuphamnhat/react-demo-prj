import couterReducer from '../features/Counter/counterSlice';
import calculatorReducer from '../features/Calculator/calculatorSlice';
import colorReducer from "../redux/reducers/colorReducer";
const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    counter: couterReducer,
    calculator: calculatorReducer,
    color: colorReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store