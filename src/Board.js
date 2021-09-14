import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import {Square} from "./Square";

export class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice(); //creates copy of squares array
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares, xIsNext: !this.state.xIsNext,});
  }

  renderSquare(i){
    return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)} />;
  }

  

  render(){
    //const status = this.state.xIsNext==true ? 'Next Player: X' : 'Next Player: O';

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    var coloumns=[];
    var k=0;
    for(var i=0;i<3;i++){
      var rows=[];
      for(var j=0;j<3;j++){
        rows.push(this.renderSquare(k));
        console.log("key="+rows[j].props);
        k++;
        
      }
      coloumns.push(<div className="board-row"> {rows} </div>);
    }

    var x=[];
    x.push(<div className="status">{status}
    </div>);
    x.push(<div> {coloumns} </div>);

    return(
      <div>
        {x}
      </div>
    );
    /*
    return(
      <div>
        <div className="status">{status}
        </div>
    
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          </div>
          <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          </div>
          <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          </div>
          
      </div>
    );*/
  }
}

function DrawSquare(){
  var rows=[];
  for(var i=0;i<9;i++){
    rows.push(<Square value={i} onClick={()=>this.handleClick(i)} />);
  }
  return <div className="board-row"> {rows} </div>;
}

function renderSq(i){
  return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)} />;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}