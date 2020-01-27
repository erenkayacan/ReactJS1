import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button label={"Click Button One"} handleClick={() => alert('Clicked button One!')}>
          </Button>
          <Button label={"Click Button Two"} handleClick={() => alert('Clicked button Two!')}>
      </Button>
        </header>
      </div>
    );
  }
};
const Button = ({ type = 'button', handleClick, label }) => {
  return (
    <button className="link-button" type={type} onClick={handleClick}>
      {label}
    </button>
  );
};
export default App;
