import React, { Component } from 'react';
import Form from './Components/Register/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="leftMain">

        </div>

         <div className="rightMain">
         <Form />
        </div>
      </div>
    );
  }
}

export default App;
