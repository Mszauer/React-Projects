import { FETCH_WEATHER } from '../actions/index';

export default function(state = [ ],action){
  // console.log('Action received',action);
  switch (action.type){
    case FETCH_WEATHER:
      //concat returns new array with added parameter
      return state.concat([ action.payload.data ])
      //or use es6 spread
      // return [ action.payload.data, ...state];
  }
  return state;

}
