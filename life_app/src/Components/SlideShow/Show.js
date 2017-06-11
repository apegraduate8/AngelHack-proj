import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Axios from 'axios';
import * as actionCreators from '../../State/Actions';

const Show = ({ match }) => {
  console.log(match.params)
    return (
      <div className="form">
            <h1> yo </h1>
      </div>
    );

}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column"
  },
  submit: {
    alignSelf: "center"
  }

}

const mapDispatchToProps = function(dispatch){
      return bindActionCreators(actionCreators, dispatch)
}


const mapStateToProps = function(state){
        return {
              inputValue: state.inputValue
            }
}


export default connect(mapStateToProps, mapDispatchToProps)(Show);




