import React, { Component } from 'react';
import styled from 'styled-components';

const LengthInput = styled.input`
  width: 3em;
`;

const CueSeconds = styled.input`
  width: 4em;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lengthInMinutes: 6,
      cueSeconds: 60,
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

  render() {
    const { cueSeconds, lengthInMinutes } = this.state;
    return (
      <div>
        <h1>Leg Timer</h1>
        <p>Run for <LengthInput value={lengthInMinutes} onChange={this.handleLengthChange} type='number'/> minutes</p>
        <p>Every <CueSeconds value={cueSeconds} onChange={this.handleCueSecondsChange} type='number' /> seconds play sound.</p>
      </div>
    );
  }
}

export default App;
