import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {create} from './cartSlice';
export function Cart (){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartItemSubmitEventHandler = (e, cartItemName) => {
        e.preventDefault();
        dispatch(create(cartItemName));
    }
    return(
        <div className='App'>
            <div>
                <button
                    onClick={event => cartItemSubmitEventHandler(event, 'React ebook')}
                >
                    Add React eBook to Cart
                </button>
                <button
                    onClick={event => cartItemSubmitEventHandler(event, 'React book')}
                >
                    Add React Book to Cart
                </button>
            </div>
            <div>
                <h1>Cart</h1>
                <p>{cart.name}</p>
                {cart.map(cart => (
                    <div>
                        {cart.id}: {cart.name}
                    </div>
                ))}
            </div>
        </div>
    )
}