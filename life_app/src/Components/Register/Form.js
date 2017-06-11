import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Axios from 'axios';
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


  async handleSubmit(e){
        e.preventDefault();
        console.log(this.form)
          let u = {...this.form,

            name: this.form.name.value,
            birth: this.form.birth.value,
            death: this.form.death.value
         }
         try {
              let _r = await Axios.post("http://localhost:4000/api", u)
              console.log(_r)
              this.props.FormValue(_r.data)

         }catch(err){console.log(err)}

        console.log("props. ", this.props.inputValue)



  }

  submitRequest(e){

  }

  render() {

        if(this.props.inputValue.name){
          console.log(this.props)
          return(
            <div className="form2">
              <h1> {this.props.inputValue.name} </h1>
              <h1> {this.props.inputValue.birth} </h1>
              <h1> {this.props.inputValue.death} </h1>
              </div>

            )
        }
    return (
      <div className="form">

        <div className="form-column">
          <h2 className="row h2s"> Full Name </h2>
          <h2 className="row h2s"> Birth Date </h2>
          <h2 className="row h2s"> Death Date </h2>
        </div>

          <div style={styles.formRow}>
          <form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
            <label className="nameLabel formLabel row">

              <input type="text" className="reg" placeholder="John Doe" style={styles.input} ref={ e => this.form.name = e } />
            </label>
             <label className="birthLabel formLabel row">

              <input type="text"  className="reg" placeholder="12/4/1963" style={styles.input} ref={ e => {this.form.birth = e}} />
            </label>
             <label className="deathLabel formLabel row">

              <input type="text"  className="reg" placeholder="2/3/2002" style={styles.input} ref={ e => {this.form.death = e} } />
            </label>
            <input type="submit" className="reg" id="submitButton" style={styles.input} value="submit" style={styles.button} />
          </form>
              <button onClick={() => {this.submitRequest()}} style={styles.button} className="requestButton"> Submit registration </button>
        </div>
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
  },
  input: {
    width: "200px",
    padding: "2px",
    fontSize: "20px",
    border: "1px solid #cbcbd2",
    borderRadius: "4px",

  },
  formRow: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    borderRadius: "4px",
    padding: "10px 16px",
    fontSize: "18px",
    lineHeight: "1.33",
    width: "100%",
    backgroundColor: "rgba(158, 88, 159, 0.67)",
    backgroundImage: "linear-gradient(left bottom, rgba(159,88,150,0) 0,rgba(159,88,150,0.6) 100%)",
    margin: "2px"
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



