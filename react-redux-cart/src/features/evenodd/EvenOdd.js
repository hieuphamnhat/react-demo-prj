import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./evenoddSlice";
export function EvenOdd(){
    const value = useSelector(state=>state.evenodd.value)
    const dispatch = useDispatch()
    console.log(value)
    const handleIncreaseClick = () => {
      const action = increment();
      dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = decrement();
        dispatch(action);
    }
    return(
        <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => handleIncreaseClick()} 
        >
          Increment
        </button>
        <p>{value}</p>
        <button
          aria-label="Decrement value"
          onClick={() => handleDecreaseClick()}
        >
          Decrement
        </button>
      </div>
    </div>
    )
}
