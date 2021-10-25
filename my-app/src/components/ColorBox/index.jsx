import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from 'D:/programming/reactjs/my-app/src/redux/actions/setColor.js';

function ColorBox(props) {
    //lấy counter ở rootReducer
    const color = useSelector(state => state.color) // useSelector là một hook giúp lấy 1 cái state trong root của mình
    const dispatch = useDispatch(); // sử dụng dispatch để gửi action
    console.log(color);

    const handeChangeColor = function () {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);;
        dispatch(setColor(randomColor));
    };

    return (
        <div>
            <button onClick={() => handeChangeColor()}>Random Color</button>
            <h1 style={{ color: color }}>Hello world</h1>
            <input type="text" value={color}/>
        </div>
    );
}

export default ColorBox;