import * as con from './constants';

export function nameValue(value){
  console.log("inside the action index.  name ",  value)
  return {
    type: con.UPDATE_nameInput,
    payload: value
  }
}

export function birthValue(value){
  console.log("inside the action index. birth ", value)
  return {
    type: con.UPDATE_birthInput,
    payload: value
  }
}

export function deathValue(value){
  console.log("inside the action index. death ", value)
  return {
    type: con.UPDATE_deathInput,
    payload: value
  }
}
export function FormValue(value){
  console.log("inside the action index. the total form value ", value)
  return {
    type: con.UPDATE_Form,
    payload: value
  }
}

export function urlValue(value){
  console.log("inside the action index.  UURRRLLLLLL >>> ",  value)
  return {
    type: con.UPDATE_url,
    payload: value
  }
}

export function Userinfo(value){
  console.log("inside the action index.  UURRRLLLLLL >>> ",  value)
  return {
    type: con.UserInfo,
    payload: value
  }
}

export function UserSong(value){
  console.log("inside the action index.  UURRRLLLLLL >>> ",  value)
  return {
    type: con.UserSong,
    payload: value
  }
}

export function UserImages(value){
  console.log("inside the action index. USERRR IMAGEs >>> ",  value)
  return {
    type: con.UserImages,
    payload: value
  }
}

export function CurrentUserImage(value){
  console.log("inside the action index.  current IMAGE >>> ",  value)
  return {
    type: con.UsercurrentImage,
    payload: value
  }
}
export function UserImageCount(val){
  console.log("inside the action index.  IMAGE change UserImageCount>>> ",  val)
  return {
    type: con.ImageCount,
    payload: val
  }
}




