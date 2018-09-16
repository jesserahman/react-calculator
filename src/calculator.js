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
    this.addNumbers = this.addNumbers.bind(this);
    this.subtractNumbers = this.subtractNumbers.bind(this);
    this.multiplyNumbers = this.multiplyNumbers.bind(this);
    this.divideNumbers = this.divideNumbers.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  setNum1(e) {
    this.setState({num1: e.target.value});
  }

  setNum2(e) {
    this.setState({num2: e.target.value});
  }

  addNumbers(e){
    e.preventDefault();
    const new_result = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({ result: new_result })
  }

  subtractNumbers(e) {
    e.preventDefault();
    const new_result = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({ result: new_result })
  }

  multiplyNumbers(e) {
    e.preventDefault();
    const new_result = parseInt(this.state.num1) * parseInt(this.state.num2);
    this.setState({ result: new_result })
  }

  divideNumbers(e) {
    e.preventDefault();
    const new_result = parseInt(this.state.num1) / parseInt(this.state.num2);
    this.setState({ result: new_result })
  }

  resetState(e){
    this.setState({ 
      num1: '',
      num2: '',
      result: 0
     })
  }

  render(){
    return (
      <div className="calculator">
        <h1 className="result"> {this.state.result}</h1>
        <input value={this.state.num1} onChange={this.setNum1} /> 
        <input value={this.state.num2} onChange={this.setNum2}/> 
        <br />

        <button className="top_btn" onClick={this.resetState}> A/C </button>
        <button className="top_btn" > +/- </button>
        <button className="top_btn" > % </button>
        <button className="op_btn" onClick={this.divideNumbers}> / </button>
        <br />

        <button className="btn" > 7 </button>
        <button className="btn" > 8 </button>
        <button className="btn" > 9 </button>
        <button className="op_btn" onClick={this.multiplyNumbers}> x </button>
        <br />

        <button className="btn" > 4 </button>
        <button className="btn" > 5 </button>
        <button className="btn" > 6 </button>
        <button className="op_btn" onClick={this.subtractNumbers}> - </button>
        <br />

        <button className="btn" > 1 </button>
        <button className="btn" > 2 </button>
        <button className="btn" > 4 </button>
        <button className="op_btn" onClick={this.addNumbers}> + </button>
        <br />

        <button className="btn" id="zero" > 0 </button>
        <button className="btn" > . </button>
        <button className="op_btn" onClick={this.addNumbers}> = </button>

      </div>
    );
  }
}

export default Calculator;


