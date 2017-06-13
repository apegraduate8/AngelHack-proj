import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../State/Actions';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import config from '../../Config';




class Images extends Component {

  componentDidMount(){
console.log(this.props, "being calledddd")
// var options = {
//               Bucket: config.S3_BUCKET,
//               Field: {
//                 // Key: `${this.props.name}/${this.props.birth}`
//               }

//             }

//             // s3.createPresignedPost(options, function(err, data) {
//             //   if (err) {
//             //     console.error('Presigning post data encountered an error', err);
//             //   } else {
//             //     console.log('The post data is >>>>. ', data);
//             //   }
//             // });
// console.log("in the image. >>", options, this.props)

  }


  registerForm(e){
      e.preventDefault()
      console.log(this.props, "called registrationform")
      console.log(this.history)

  }




  render(){
      if(this.props.inputValue.name){

        return(
          <div>
               <ImagesUploader
                url="http://localhost:4000/api"
                optimisticPreviews={true}
                onLoadEnd={(err, resp) => {
                    if(err){
                        console.log(err, resp);
                    }else{
                      console.log(resp)
                    }
                }}
                label="Upload multiple images"

              />
             <Link to={`/slideShow/${this.props.inputValue.name + this.props.inputValue.birth}`} style={styles.button}> Submit registration </Link>
              </div>
            )
      }
      return(
          <h3 style={{ alignSelf: "baseline", marginLeft: "14%", marginTop: "10%", fontSize: "15px" }}> submit the required fields before image upload </h3>
        )


  }


}

const styles = {
  button: {
    borderRadius: "4px",
    padding: "10px 16px",
    fontSize: "18px",
    lineHeight: "1.33",
    width: "100%",
    backgroundColor: "rgba(158, 88, 159, 0.67)",
    backgroundImage: "linear-gradient(left bottom, rgba(159,88,150,0) 0,rgba(159,88,150,0.6) 100%)",
    margin: "2px",
    color: "black",
    textDecoration: "none"
  }
}


const mapDispatchToProps = function(dispatch){

      return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = function(state){
        return {
              inputValue: state.inputValue,
               url: state.urlValue,

            }
}


export default connect(mapStateToProps, mapDispatchToProps)(Images);
