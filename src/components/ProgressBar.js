import React, { Component } from 'react';

/*
 * Stateless progress bar
 *
 * Properties:
 *  width   horizontal size of bar
 *  height  vertical size of bar
 *  low     low end of data range (default: 0)
 *  high    high end of data range (default: 100)
 *  value   value to display
 *  color   color of the bar (default: red)
 */
class ProgressBar extends Component {
  /*
   * Render the progress bar HTML
   * Default width 200, height 20.
   */
  render() {
    var rho = this._computeRho(this.props.value || 0);
    var percent = Math.round(rho * 100);

    var w = this.props.width || 200;
    var h = this.props.height || 20;

    return (
      <div className="ProgressBar">
        <canvas ref="canvas" width={w} height={h} className="ProgressBar-bar"></canvas>
        <p className="ProgressBar-percentage">
          {percent}%
        </p>
      </div>
    );
  }

  /*
   * Draw on a mount
   */
  componentDidMount(prevProps, prevState) {
    this._draw();
  }
  
  /*
   * Draw on an update
   */
  componentDidUpdate(prevProps, prevState) {
    this._draw();
  }

  /*
   * Draw the progress bar on the canvas, after the DOM
   * elements have been created.
   */
  _draw() {
    const ctx = this.refs.canvas.getContext('2d');

    var h = this.refs.canvas.height;
    var w = this.refs.canvas.width;
    var rho = this._computeRho(this.props.value);
    var len = rho * w;

    ctx.fillStyle = this.props.color || 'red';
    ctx.clearRect(0,0,w,h);
    ctx.fillRect(0,0,len,h);
  }

  /*
   * Compute the proportion given a value.
   * If the range isn't configured in the properties
   * we assume [0..100]. If the value isn't provided
   * we assume 0.
   */
  _computeRho(x) {
    if(!x) x = 0;

    var a = this.props.low || 0;
    var b = this.props.high || 100;

    var range = b - a;

    var rho = (x - a) / range;
    rho = Math.max(rho, 0);   // must be at least 0
    rho = Math.min(rho, 1);   // and no greater than 1

    return rho;
  }
}

export default ProgressBar;
