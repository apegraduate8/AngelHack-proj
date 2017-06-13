import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../State/Actions';
import DropZo from 'react-dropzone';
import Axios from 'axios';


class Drop extends Component {


  componentDidMount(){
    console.log(this.props)
  }

async onDrop(acceptedFile, rejected){


      if(acceptedFile.length !== 0){
         console.log("good", acceptedFile.length)
         this.props.UserSong(acceptedFile[0])

          const imageFormData = new FormData();
          // let lo =  window.location.href
          // let p = lo.split("/")
          // console.log(p[p.length -1])
          console.log("inside the ondrop ", this.props.user.name)
          let y = {...acceptedFile[0], user: this.props.user.name}
          // acceptedFile[0] = this.props.theUser.name
          imageFormData.append('imageFiles', acceptedFile[0]);

          // let preparedData = {
          //   name: this.props.theUser.name,
          //   imageFiles
          // }

          const data = {
            userName: this.props.user.name
          }

      // let reader = new window.FileReader();
      //   reader.readAsDataURL(acceptedFile[0]);
      //   reader.onloadend = function () {
      //       let base64data = reader.result;
      //       console.log(base64data);
      //   }

         try {
              let r = await Axios.post("http://localhost:4000/api/", data)
              let p = await Axios.post("http://localhost:4000/api/", imageFormData)

              console.log(r, p)


         }catch(err){console.log(err)}


      }else{
        console.log("rej", rejected)
      }

}




  render(){
      console.log(this.props.usersongs)
      console.log(this.props.user)
    if(this.props.usersongs === null){
      return(
                <div>
                  <DropZo
                  onDrop={this.onDrop.bind(this)}
                  style={styles.dpZone}
                  accept=".mp3"


                  >
                       <p style={{padding: "4%", fontSize: "18px"}}>
                        Add a song to the playlist
                        </p>
                  </DropZo>

                </div>
                )
      }

        return(
            <p> only 1 song at a time </p>
          )
  }


}

const styles = {
  dpZone: {
        width: "100%",
        height: "150px",
        borderWidth: "2px",
        borderColor: "rgb(102, 102, 102)",
        borderStyle: "dashed",
        borderRadius: "5px",
        cursor: "pointer"
  },


}



const mapDispatchToProps = function(dispatch){
      return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = function(state){
        return {
               usersongs: state.userSong,
               user: state.userValue,
               url: state.urlValue
            }
}


export default connect(mapStateToProps, mapDispatchToProps)(Drop);

