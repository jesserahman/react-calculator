import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      num1: '', 
      num2: '',
      result : 0,
      operation : '',
      operator_clicked: false
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addNumbers = this.addNumbers.bind(this);
    this.subtractNumbers = this.subtractNumbers.bind(this);
    this.multiplyNumbers = this.multiplyNumbers.bind(this);
    this.divideNumbers = this.divideNumbers.bind(this);
    this.resetState = this.resetState.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    this.setState({num1: e.target.value});
  }

  setNum2(e) {
    e.preventDefault();
    this.setState({num2: e.target.value});
  }

  addNumbers(e){
    console.log('function called')
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

  addToNumber = (value) => (e) => {
    e.preventDefault();
    this.state.operator_clicked ? 
      this.setState({ num2: this.state.num2 + value }) : 
        this.setState({ num1: this.state.num1 + value})
  }

  handleOperation = (op) => (e) => {
    e.preventDefault(); 
    this.setState({ operation: op, operator_clicked: true })
  }

  resetState(e){
    e.preventDefault();
    this.setState({ 
      num1: '',
      num2: '',
      result: 0,
      operation: '',
      operator_clicked: false
     })
  }

  // When to call a function with () and when not to? 
  getResult(e) {
    e.preventDefault();
    console.log(this.state.operation);
    switch (this.state.operation) {
      case 'add':
        this.addNumbers(e);
        break;
      case 'sub':
        this.subtractNumbers(e);
        break;
      case 'mul':
        this.multiplyNumbers(e);
        break;
      case 'div':
        this.divideNumbers(e);
        break;
    }
  }

  // How to give elements multiple classes?
  // How to determine what is displayed based on state? 
  // Ex: H1 displays result, but would like to display num values when there is no result
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
        <button className="op_btn" onClick={this.handleOperation('div')}> / </button>
        <br />

        <button className="btn" onClick={this.addToNumber(7)}> 7 </button>
        <button className="btn" onClick={this.addToNumber(8)}> 8 </button>
        <button className="btn" onClick={this.addToNumber(9)}> 9 </button>
        <button className="op_btn" onClick={this.handleOperation('mul')}> x </button>
        <br />

        <button className="btn" onClick={this.addToNumber(4)}> 4 </button>
        <button className="btn" onClick={this.addToNumber(5)}> 5 </button>
        <button className="btn" onClick={this.addToNumber(6)}> 6 </button>
        <button className="op_btn" onClick={this.handleOperation('sub')}> - </button>
        <br />

        <button className="btn" onClick={this.addToNumber(1)}> 1 </button>
        <button className="btn" onClick={this.addToNumber(2)}> 2 </button>
        <button className="btn" onClick={this.addToNumber(3)}> 3 </button>
        <button className="op_btn" onClick={this.handleOperation('add')}> + </button>
        <br />

        <button className="btn" id="zero" onClick={this.addToNumber(0)} > 0 </button>
        <button className="btn" > . </button>
        <button className="op_btn" onClick={this.getResult}> = </button>
      </div>
    );
  }
}

export default Calculator;


