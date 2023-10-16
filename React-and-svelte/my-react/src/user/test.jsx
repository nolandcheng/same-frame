import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Today is {new Date().toLocaleDateString()}.</p>
    </div>
  );
}

export default Greeting;