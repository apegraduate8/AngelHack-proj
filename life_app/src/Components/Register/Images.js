import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../State/Actions';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import config from '../../Config';

import aws from "aws-sdk";


aws.config.update({accessKeyId: config.AWS_ACCESS_KEY, secretAccessKey: config.AWS_SECRET_KEY, region: config.region});
let s3 = new aws.S3();
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

  set(){
     console.log("called in image", this.props)
      let _p = `/${this.props.inputValue.name}/${this.props.inputValue.birth}`
    var options = {
              Bucket: config.S3_BUCKET,
              Field: {
                Key: _p
              }
            }

  }




  render(){
      if(this.props.inputValue.name){
          // this.set()

        return(
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
            )
      }
      return(
          <h3> submit the required fields before image upload </h3>
        )


  }


}


const mapDispatchToProps = function(dispatch){

      return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = function(state){
        return {
              inputValue: state.inputValue,
               url: state.urlValue
            }
}


export default connect(mapStateToProps, mapDispatchToProps)(Images);
