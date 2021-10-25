import React, { useEffect } from 'react';
import { Cart } from './features/cart/Cart';
import {useSelector, useDispatch} from 'react-redux'
import allActions from './actions';
import './App.css';
import { EvenOdd } from './features/evenodd/EvenOdd';
const App = () =>   {
  const counter = useSelector(state => state.root.counter)
  const currentUser = useSelector(state => state.root.currentUser)
  console.log("currentUser: ", currentUser)
  console.log("counter: ", counter)
  const dispatch = useDispatch()

  const user = {name: "Rei"}

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])

    return (
        <div className="App">
          <Cart />
          {
            currentUser.loggedIn ? 
            <>
              <h1>Hello, {currentUser.user.name}</h1>
              <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
            </> 
            : 
            <>
              <h1>Login</h1>
              <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login</button>
            </>
          }
         <h1>Counter: {counter}</h1>
         <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
         <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button>

         <EvenOdd />
       </div>
    );
}
export default App;