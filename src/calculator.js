import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';

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
    this.addNumbers = this.addNumbers.bind(this);
    this.subtractNumbers = this.subtractNumbers.bind(this);
    this.multiplyNumbers = this.multiplyNumbers.bind(this);
    this.divideNumbers = this.divideNumbers.bind(this);
    this.resetState = this.resetState.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  addNumbers(e){
    console.log('function called')
    e.preventDefault();
    const new_result = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({ result: new_result })
    return new_result;
  }

  subtractNumbers(e) {
    e.preventDefault();
    const new_result = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({ result: new_result })
    return new_result;
  }

  multiplyNumbers(e) {
    e.preventDefault();
    const new_result = parseInt(this.state.num1) * parseInt(this.state.num2);
    this.setState({ result: new_result })
    return new_result;
  }

  divideNumbers(e) {
    e.preventDefault();
    const new_result = parseInt(this.state.num1) / parseInt(this.state.num2);
    this.setState({ result: new_result })
    return new_result;
  }

  addToNumber = (value) => (e) => {
    e.preventDefault();
    this.state.operator_clicked ? 
      this.setState({ num2: this.state.num2 + value, result: this.state.num2 + value }) : 
        this.setState({ num1: this.state.num1 + value, result: this.state.num1 + value})
  }

  handleOperation = (op) => (e) => {
    e.preventDefault(); 
    this.setState({ operation: op, operator_clicked: true });
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
    var op_result;
    switch (this.state.operation) {
      case 'add':
        op_result = this.addNumbers(e);
        break;
      case 'sub':
        op_result = this.subtractNumbers(e);
        break;
      case 'mul':
        op_result = this.multiplyNumbers(e);
        break;
      case 'div':
        op_result = this.divideNumbers(e);
        break;
    }
    this.setState({ num1: op_result, num2: '', operator_clicked: false });
  }

  // How to determine what is displayed based on state? 
  // Ex: H1 displays result, but would like to display num values when there is no result
  render(){
    return (
      <div className="calculator">
        <h1 className="result"> {this.state.result} </h1>
        <br />

        <button className={classNames('btn', 'top_btn')} onClick={this.resetState}> A/C </button>
        <button className={classNames('btn', 'top_btn')} > +/- </button>
        <button className={classNames('btn', 'top_btn')} > % </button>
        <button className={classNames('btn', 'op_btn')} onClick={this.handleOperation('div')}> / </button>
        <br />

        <button className={classNames('btn', 'dark_btn')} onClick={this.addToNumber(7)}> 7 </button>
        <button className={classNames('btn', 'dark_btn')} onClick={this.addToNumber(8)}> 8 </button>
        <button className={classNames('btn', 'dark_btn')} onClick={this.addToNumber(9)}> 9 </button>
        <button className={classNames('btn', 'op_btn')} onClick={this.handleOperation('mul')}> x </button>
        <br />

        <button className={classNames('btn', 'dark_btn')} onClick={this.addToNumber(4)}> 4 </button>
        <button className={classNames('btn', 'dark_btn')} onClick={this.addToNumber(5)}> 5 </button>
        <button className={classNames('btn', 'dark_btn')} onClick={this.addToNumber(6)}> 6 </button>
        <button className={classNames('btn', 'op_btn')} onClick={this.handleOperation('sub')}> - </button>
        <br />

        <button className={classNames('btn', 'dark_btn')} onClick={this.addToNumber(1)}> 1 </button>
        <button className={classNames('btn', 'dark_btn')} onClick={this.addToNumber(2)}> 2 </button>
        <button className={classNames('btn', 'dark_btn')} onClick={this.addToNumber(3)}> 3 </button>
        <button className={classNames('btn', 'op_btn')} onClick={this.handleOperation('add')}> + </button>
        <br />

        <button className={classNames('btn', 'dark_btn')} id="zero" onClick={this.addToNumber(0)} > 0 </button>
        <button className={classNames('btn', 'dark_btn')} > . </button>
        <button className={classNames('btn', 'op_btn')} onClick={this.getResult}> = </button>
      </div>
    );
  }
}

export default Calculator;


