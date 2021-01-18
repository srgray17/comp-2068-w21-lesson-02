import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HelloWorld() {
  return (
    <div className="container">
      <div className="jumbtron">
        <h1>Hello, World.</h1>
        <p>How are you today?</p>
      </div >
    </div >
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);