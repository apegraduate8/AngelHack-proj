import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { InputValue } from '../../State/Actions/Index';
import './App.css';

class Form extends Component {

  constructor(props){
    super(props)
    this.input = ""
    this.state = {
      nameValue: "",

    }
  }


  componentDidMount(){
    console.log(this.state);
  }
  handleNameChange(e){
     this.input = e.target.value

        // this.setState(state => {
        //   state.nameValue = this.input
        // })
        console.log(this.props)

  }


  handleSubmit(e){
        e.preventDefault();

  }

  submitRequest(e){

  }

  render() {

    return (
      <div className="form">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label className="nameLabel">
          <span> full Name:</span>
          <input type="text" value={this.state.nameValue} onChange={ (e) => this.handleNameChange(e) } />
        </label>
         <label className="birthLabel">
          <span>Birth date:</span>
          <input type="text" value={this.state.nameValue} onChange={ (e) => this.handleNameChange(e) } />
        </label>
         <label className="deathLabel">
          <span>deceased date:</span>
          <input type="text" value={this.state.nameValue} onChange={ (e) => this.handleNameChange(e) } />
        </label>
        <input type="submit" value="submit" style={styles}/>
      </form>
            <button onClick={() => {this.submitRequest()}} className="requestButton"> Submit registration </button>
      </div>
    );
  }
}


const mapStateToProps = function(){
        return {

  }
}

const mapDispatchToProps = function(dispatch){
      return bindActionCreators({getInput: InputValue}, dispatch)
}

export default connect(mapDispatchToProps, mapStateToProps)(Form);



