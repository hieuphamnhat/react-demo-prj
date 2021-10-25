import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, minus, multi, divide } from './calculatorSlice.js';

function CalculatorFeature(props) {
    //lấy counter ở rootReducer
    const calculator = useSelector(state => state.calculator) // useSelector là một hook giúp lấy 1 cái state trong root của mình
    const dispatch = useDispatch(); // sử dụng dispatch để gửi action
    console.log(calculator);

    const handleAddClick = () => {
        const action = add();
        dispatch(action);
    }

    const handleMinusClick = () => {
        const action = minus();
        dispatch(action);
    }

    const handleMultiClick = () => {
        const action = multi();
        dispatch(action);
    }

    const handleDivideClick = () => {
        const action = divide();
        dispatch(action);
    }

    return (
        <div>
            <h1>Calculator</h1>
            <p>{calculator}</p>
            <input type="text" value={calculator}/>
            <button onClick={() => handleAddClick()} >+</button>
            <button onClick={() => handleMinusClick()}>-</button>
            <button onClick={() => handleMultiClick()} >x</button>
            <button onClick={() => handleDivideClick()}>/</button>
        </div>
    );
}

export default CalculatorFeature;