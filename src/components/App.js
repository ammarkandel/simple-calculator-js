import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      animation: '',
    };
    this.handleClickBtn = this.handleClickBtn.bind(this);
    this.resultToStr = this.resultToStr.bind(this);
    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  handleClickBtn(button) {
    if (button === 'AC') {
      this.triggerAnimation(true);
    }
    const { total, next, operation } = this.state;
    const data = calculate({ total, next, operation }, button);
    this.setState(data);
  }

  triggerAnimation(bool) {
    this.setState({
      animation: bool ? 'ripple-animate' : '',
    });
  }

  resultToStr() {
    const { total, next, operation } = this.state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  }

  render() {
    const { animation } = this.state;
    return (
      <div className="App">
        <Display
          result={this.resultToStr()}
          animation={animation}
          setAnim={this.triggerAnimation}
        />
        <ButtonPanel handleClick={this.handleClickBtn} />
      </div>
    );
  }
}

export default App;
