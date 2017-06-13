import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../State/Actions';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Window = (props) =>{

    if(props.user){

     let i = props.ImgCount
     let length = props.user.images.length-1
    console.log("user value >> window>>", props.user.images, "wewrwrweffe", i)

          // const styles = {
          //       dp: {
          //             backgroundImage: `url(${ props.userImgs[0]})` ,
          //             backgroundSize: "contain",
          //             backgroundRepeat: "no-repeat",

          //       }
          //   }



       function reb(){
          let count = props.ImgCount
                  if(props.user.images){
                      return(
                          <div style={{
                           width: "50%",
                           height: "80%",
                           backgroundImage: `url(${props.user.images[count]})`,
                           backgroundSize: "contain",
                           backgroundRepeat: "no-repeat"
                           }} className="swix"></div>
                        )
                    }
        }


        function incr(){
               setTimeout(function(){

                     if(i >= length){i = -1}
                        i+=1

                    props.UserImageCount(i)

                  }, 4000)
        }

            return(
                <div className="window" >

                   { incr() }

                   {  reb()  }

                </div>
              )

    }else{
      return(
            <h1> loading </h1>
        )
    }

}










const mapDispatchToProps = function(dispatch){
      return bindActionCreators(actionCreators, dispatch)
}


const mapStateToProps = function(state){
        return {
              inputValue: state.inputValue,
              userImgs: state.userImgs,
              currentImage: state.currentImage,
              ImgCount: state.imageCount,
              user: state.userValue
            }
}


export default connect(mapStateToProps, mapDispatchToProps)(Window);

/// https://github.com/akiran/react-slick
