import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Axios from 'axios';
import * as actionCreators from '../../State/Actions';
import Drop from '../Drop';
import Window from './Window';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const WhatsappIcon = generateShareIcon('whatsapp');










const styles = {
  form: {
    display: "flex",
    flexDirection: "column"
  },
  submit: {
    alignSelf: "center"
  }

}

class Show extends Component {

        constructor(props){
              super(props)
        }

        componentDidMount(){
          console.log(this.props.match.params.name)
          this.get(this.props.match.params.name)
        }


 async get(params){
     try {
            let _r = await Axios.get("http://localhost:4000/api/"+params)
            console.log(_r.data.Item)
            this.props.Userinfo(_r.data.Item)
            // this.props.UserImages(_r.data.Item.images)
         }catch(err){console.log(err)}

  }



    render(){
      console.log(this.props)
      let sorry = this.props.userVal ? `${this.props.userVal.name}: ${this.props.userVal.birth} - ${this.props.userVal.death}` : "sorry for the wait, just a few seconds"
      return(
      <div className="SlideContainer">
        <div className="mid">
             <Window />
              <h1 className="Dates" style={{alignSelf: "center"}}> { sorry } </h1>
        </div>
         <div className="socialMedia">

            <div className="icons">
                <FacebookShareButton
                  url={`${String(window.location)}/${this.props.match.params}`}
                  title={"Facebook"}
                  className="Demo__some-network__share-button">
                  <FacebookIcon
                    size={50}
                    round />
                </FacebookShareButton>

                <TwitterShareButton
                  url={`${String(window.location)}/${this.props.match.params}`}
                  title={"Twitter"}
                  className="Demo__some-network__share-button">
                  <TwitterIcon
                    size={50}
                    round />
                </TwitterShareButton>

                <LinkedinShareButton
                  url={`${String(window.location)}/${this.props.match.params}`}
                  title={"Facebook"}
                  className="Demo__some-network__share-button">
                  <LinkedinIcon
                    size={50}
                    round />
                </LinkedinShareButton>
            </div>
            <Drop theUser={this.props.userVal} />
          </div>
      </div>

      )
    }

}









const mapDispatchToProps = function(dispatch){
      return bindActionCreators(actionCreators, dispatch)
}


const mapStateToProps = function(state){
        return {
              inputValue: state.inputValue,
              userImgs: state.UserImgs,
              userVal: state.userValue
            }
}


export default connect(mapStateToProps, mapDispatchToProps)(Show);




