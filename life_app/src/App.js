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
          <div className="logo"> </div>
          <div className="snippet">

              <p style={{fontSize: "25px"}}>Once you complete the form, you will be directed to the "place of reflection". At any time you may add a photo to the gallery or song to the playlist. Feel free to share this memorial page so others can add to this persons legacy <br />
                  "Sorry for your lost" <br/>
                  "they will always be remembered"
              </p>
          </div>
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
