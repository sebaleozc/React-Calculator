import './App.css';
import Button from "./components/Button";
import Screen from "./components/Screen.jsx";
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import EqualButton from './components/EqualButton';

function App() {

  const [input,setInput] = useState("");

  const addInput = (val) =>{
    setInput(input + val);
  };

  const calcResult = () =>{

    if(input){
      return setInput(parseFloat(evaluate(input).toFixed(2)));
    }

    if (input){
    setInput(evaluate(input));
    }else {
    alert("Please select a number")
   }
  }

  return (
    <div className="App">
      <div className="calculator__container">
        <Screen input={input}/>
        <div className="row">
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className="row">
          <EqualButton manageClick={calcResult}>=</EqualButton>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Clear className="button__clear" manageClear={() => setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
