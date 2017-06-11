import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Axios from 'axios';
import * as actionCreators from '../../State/Actions';
import Drop from '../Drop';
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







const get = async (params) => {
     try {
            let _r = await Axios.get("http://localhost:4000/api/"+params)
            console.log(_r)
            this.props.FormValue(_r.data)

         }catch(err){console.log(err)}

}

const Show = ({ match }) => {
  console.log(match.params)
    return (
      <div className="SlideContainer">
        <div className="mid">
              <div className="window">
                  <h4> snippets </h4>
              </div>
              <h1 className="Dates" style={{alignSelf: "center"}}> yo </h1>
        </div>
         <div className="socialMedia">

            <div className="icons">
                <FacebookShareButton
                  url={`${String(window.location)}/${match.params}`}
                  title={"Facebook"}
                  className="Demo__some-network__share-button">
                  <FacebookIcon
                    size={50}
                    round />
                </FacebookShareButton>

                <TwitterShareButton
                  url={`${String(window.location)}/${match.params}`}
                  title={"Twitter"}
                  className="Demo__some-network__share-button">
                  <TwitterIcon
                    size={50}
                    round />
                </TwitterShareButton>

                <LinkedinShareButton
                  url={`${String(window.location)}/${match.params}`}
                  title={"Facebook"}
                  className="Demo__some-network__share-button">
                  <LinkedinIcon
                    size={50}
                    round />
                </LinkedinShareButton>
            </div>
            <Drop theUser={match.params}/>
          </div>
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




