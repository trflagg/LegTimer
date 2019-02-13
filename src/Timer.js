import React from 'react';

const Timer = ({ seconds }) => {
  const minutes = Math.floor(seconds / 60);
  let secondsRemaining = seconds % 60;

  if (secondsRemaining < 10) {
    secondsRemaining = '0' + secondsRemaining;
  }

  return (
    <p>{minutes}:{secondsRemaining}</p>
  )
}

export default Timer;
