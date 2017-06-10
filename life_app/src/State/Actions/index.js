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



