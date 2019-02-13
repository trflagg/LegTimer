import React, { Component } from 'react';
import styled from 'styled-components';

import Timer from './Timer';

const LengthInput = styled.input`
  width: 3em;
`;

const CueSeconds = styled.input`
  width: 4em;
`;

const SOUND_HOST = process.env.PUBLIC_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cueSeconds: 60,
      lengthInMinutes: 6,
      seconds: 0,
      secondsSinceCue: 0,
      running: false,
    };
  }

  handleLengthChange = event => {
    this.setState({
      lengthInMinutes: event.currentTarget.value,
    });
  }

  handleCueSecondsChange = event => {
    this.setState({
      cueSeconds: event.currentTarget.value,
    });
  }

  cue = () => {
    var audio = new Audio(SOUND_HOST + '/chimes.mp3');
    audio.play();
  }

  timerInterval = () => {
    let newSecondsSinceCue = this.state.secondsSinceCue + 1;
    if (newSecondsSinceCue >= this.state.cueSeconds) {
      this.cue();
      newSecondsSinceCue = 0;
    }
    this.setState({
      seconds: this.state.seconds+1,
      secondsSinceCue: newSecondsSinceCue,
    });
  }

  handleStartClick = () => {
    if (!this.state.running) {
      this.interval = setInterval(this.timerInterval, 1000);
    }
    this.setState({
      running: true,
    });
  }

  handleStopClick = () => {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({
        running: false,
      });
    }
  }

  render() {
    const { cueSeconds, lengthInMinutes, seconds } = this.state;
    return (
      <div>
        <h1>Leg Timer</h1>
        <p>Run for <LengthInput value={lengthInMinutes} onChange={this.handleLengthChange} type='number'/> minutes</p>
        <p>Every <CueSeconds value={cueSeconds} onChange={this.handleCueSecondsChange} type='number' /> seconds play sound.</p>

        <Timer seconds={seconds} />
        <button onClick={this.handleStartClick}>Start</button>
        <button onClick={this.handleStopClick}>Stop</button>
      </div>
    );
  }
}

export default App;
