import React from "react";
import ReactDOM from "react-dom";
import './style.css';

import {Board} from "./Board";

export class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }
  
  render(){
    return(
      <div className="game-board">
        <Board /> 
      </div>
    );
  }
}