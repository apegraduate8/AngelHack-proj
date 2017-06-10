export const UPDATE_state = 'UPDATE';
export const UPDATE_store = 'show';
const UPDATE_nameInput = 'nameInputValue';
const UPDATE_birthInput = 'birthInputValue';
const UPDATE_deathInput = 'deathInputValue';

export function InputValue(value){
  console.log("inside the action index. ",  value)
  return {
    type: UPDATE_nameInput,
    payload: value
  }
}

export function selectimages(images){
  console.log("inside the action index. ", articles)
  return {
    type: UPDATE_state,
    payload: images
  }
}



