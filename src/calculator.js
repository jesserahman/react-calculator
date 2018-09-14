import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      num1: '', 
      num2: '',
      result : 0
    }
  this.setNum1 = this.setNum1.bind(this);
  this.setNum2 = this.setNum2.bind(this);
  }

setNum1(e) {
  this.setState({num1: e.target.value});
}

setNum2(e) {
  this.setState({num2: e.target.value});
}

  render(){
    return (
      <div>
        <h1> {this.state.result}</h1>
        <input value={this.state.num1} onChange={this.setNum1} /> 
        <input value={this.state.num2} onChange={this.setNum2}/> 
        <button> Clear </button>
        <button> + </button>
        <button> - </button>
        <button> / </button>
        <button> x </button>
      </div>
    );
  }
}

export default Calculator;


