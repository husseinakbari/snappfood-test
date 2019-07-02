import { SAVENOTE , NOTEVISIBILE } from "../actions/types";

const initialState = {
  visibility : false,
  notes : [],
  conter : 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SAVENOTE:
        const array = state.notes
        array.push({id : state.conter + 1 , text : action.payload })
      return {
        ...state,
        notes : array,
        conter : state.conter + 1
      };
    case NOTEVISIBILE:
      console.log(action)
      return {
        ...state,
        visibility : action.payload
      };

    default:
      return state;
  }
};
