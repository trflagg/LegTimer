import React, { Component } from 'react';
import styled from 'styled-components';

const LengthInput = styled.input`
  width: 3em;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lengthInMinutes: 6,
    };
  }

  handleLengthChange = event => {
    this.setState({
      lengthInMinutes: event.currentTarget.value,
    });
  }

  render() {
    const { lengthInMinutes } = this.state;
    return (
      <div>
        <h1>Leg Timer</h1>
        <p>Run for <LengthInput value={lengthInMinutes} onChange={this.handleLengthChange} type='number'/> minutes</p>
      </div>
    );
  }
}

export default App;
