import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProgressBar from './components/ProgressBar'

const low = 40;
const high = 400;
const step = 4;

class App extends Component {
  /*
   * Contruct the app's state
   */
  constructor(props) {
    super(props);

    this.state = {
      value: low,
      direction: 1
    }
  }

  /*
   * Render the App
   */
  render() {
    var dir = (this.state.direction === -1) ? 'decreasing' : 'increasing';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Progress Bar App</h1>
        </header>
        <p className="App-intro">
          Demonstration of Progress Bar from <code>components/ProgressBar.js</code>
        </p>
        <ProgressBar width="200" height="20" low={low} high={high} value={this.state.value} />
        <p>Showing {this.state.value} in range [{low}..{high}] {dir}</p>
      </div>
    );
  }

  /*
   * After the DOM has been created, start animating the progress value
   */
  componentDidMount(prevProps, prevState) {
    this.timer = setInterval(() => { this._tick() }, 100);
  }

  /*
   * Clean up
   */
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /*
   * Compute one tick of the animation
   */
  _tick() {
    var v = this.state.value;
    var d = this.state.direction;

    v += step * d;

    if(v <= low) {
      v = low;
      d = 1;
    }

    if(v >= high) {
      v = high;
      d = -1;
    }

    this.setState({
      value: v,
      direction: d
    });
  }
}

export default App;
