import React from "react";
import { useState } from "react";
import "../styles/clear-button.css"

function Clear ( {children, manageClear} ){

  return(
    <div className="clear__container" onClick={() => manageClear(children)}>
      {children}
    </div>
  );
};



export default Clear;