import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {status: false, count: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({status: false, count: 0})
  }

  onStopBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({status: false})
  }

  onStart = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onStartBtn = () => {
    this.timeInterval = setInterval(this.onStart, 1000)
    this.setState({status: true})
  }

  renderSeconds = () => {
    const {count} = this.state
    const seconds = Math.floor(count % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {count} = this.state
    const Minutes = Math.floor(count / 60)
    if (Minutes < 10) {
      return `0${Minutes}`
    }
    return Minutes
  }

  render() {
    const {status, count} = this.state
    console.log(status)
    console.log(count)
    return (
      <div className="bg">
        <h1>Stopwatch</h1>
        <div className="stop-watchs">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stop-watch"
            />
            <p className="time-head">Timer</p>
          </div>

          <h1 className="m-s">
            {this.renderMinutes()} : {this.renderSeconds()}
          </h1>

          <div>
            <button
              type="button"
              onClick={this.onStartBtn}
              className="btn Start"
            >
              Start
            </button>
            <button type="button" onClick={this.onStopBtn} className="btn Stop">
              Stop
            </button>
            <button
              type="button"
              onClick={this.onResetBtn}
              className="btn Reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
