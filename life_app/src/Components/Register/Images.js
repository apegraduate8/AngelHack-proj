import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';



export default class Image extends Component {



  render(){

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
                inputId={this.state.formData.name}
              />
            )

  }


}
