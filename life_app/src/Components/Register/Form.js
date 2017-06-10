import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../State/Actions';
import DotEnv from 'dotenv';
import aws from "aws-sdk";

const DOT = DotEnv.config();
aws.config.update({accessKeyId: DOT.AWS_ACCESS_KEY, secretAccessKey: DOT.AWS_SECRET_KEY, region: DOT.region});

class Form extends Component {

  constructor(props){
    super(props)

    this.form = {};


  }


  componentDidMount(){
    console.log(this.props);
    // let { dispatch } = this.props

  }
  handleNameChange(){
     // this.input = e.target.value

     // this.props.nameValue(this.input)
        // this.setState(state => {
        //   state.nameValue = this.input
        // })
        console.log(this.props)

  }


  handleSubmit(e){
        e.preventDefault();
        console.log(this.form)
          let u = {...this.form,

            name: this.form.name.value,
            birth: this.form.birth.value,
            death: this.form.death.value
         }


        this.props.FormValue(u)

        console.log("props. ", this.props.inputValue)



  }

  submitRequest(e){

  }

  render() {

        if(this.props.inputValue.name){
          console.log(this.props)
          return(
            <div className="form">
              <h1> {this.props.inputValue.name} </h1>
              <h1> {this.props.inputValue.birth} </h1>
              <h1> {this.props.inputValue.death} </h1>
              </div>

            )
        }
    return (
      <div className="form">

      <form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
        <label className="nameLabel">

          <input type="text" placeholder="name" ref={ e => this.form.name = e } />
        </label>
         <label className="birthLabel">

          <input type="text"  ref={ e => {this.form.birth = e}} />
        </label>
         <label className="deathLabel">

          <input type="text"  ref={ e => {this.form.death = e} } />
        </label>
        <input type="submit" value="submit" style={styles.submit} />
      </form>
            <button onClick={() => {this.submitRequest()}} className="requestButton"> Submit registration </button>
      </div>
    );
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(Form);



