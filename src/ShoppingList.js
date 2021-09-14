import React from "react";
import ReactDOM from "react-dom";
import './style.css';

export class ShoppingList extends React.Component{
  render(){
    return(
      <div className="ShoppingList">
        <h1> Shopping List for {this.props.name} </h1>
        <u1>
          <l1>Facebook</l1>
          <l2>Instagram</l2>
          <l3>Youtube</l3>
        </u1> 
      </div>
    );
  }
}