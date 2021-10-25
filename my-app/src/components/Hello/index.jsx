import React from "react";
// import { ReactDOM } from "react";
import reactDom from "react-dom";
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
function Hello(props){
    const user = {
        firstName: 'Harper',
        lastName: 'Perez',
    };
      
    const element = <h1>Hello, {formatName(user)}!</h1>;  
    console.log(typeof element.props); // jSX object
    
    //ReactDOM.render(element, document.getElementById('root'));
    reactDom.render(element, document.getElementById('root'));
    return(
        <div className="hello"></div>
    );
}
export default Hello;