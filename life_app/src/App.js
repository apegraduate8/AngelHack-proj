import React, { Component } from 'react';
import Form from './Components/Register/Form';
import Images from './Components/Register/Images';
import './App.css';
import './Super_Form_Reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="leftMain">

        </div>

         <div className="rightMain">
         <Form />
         <Images />
        </div>
      </div>
    );
  }
}

export default App;
