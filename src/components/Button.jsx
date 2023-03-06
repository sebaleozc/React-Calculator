import React from 'react';
import "../styles/button.css"


function Button( {children, manageClick, className} ){ 

  const isOperator = (value) => {
    return isNaN(value) && (value != ".");
  };

 /* it has a className as a prop in case it would be neccessary another css on any button */  
  return(
    <div className={`${className} button__container ${isOperator(children) ? "button__operator" : ""}`.trimEnd()}
    onClick={() => manageClick(children)}>
      {children}
    </div>
  );
}


export default Button;