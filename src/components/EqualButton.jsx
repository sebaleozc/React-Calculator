import React from "react";
import "../styles/equal__button.css"


function EqualButton( {children, manageClick} ){
    return(
        <div className="button__equal" onClick={() => manageClick(children)}>
            {children}
        </div>
    )
}


export default EqualButton;

