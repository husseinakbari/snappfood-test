import { SAVENOTE , NOTEVISIBILE , SHOWNOTE ,UPDATENOTE , DELETENOTE} from "../actions/types";

const initialState = {
  visibility : false,
  notes : [],
  conter : 0,
  noteContent : undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SAVENOTE:
        const array = state.notes
        array.push({id : state.conter + 1 , text : action.payload })
      return {
        ...state,
        notes : array,
        conter : state.conter + 1,
        visibility : false,
      };
    case NOTEVISIBILE:
      return {
        ...state,
        visibility : action.payload,
        noteContent : undefined
      };
    case SHOWNOTE:
      return {
        ...state,
        visibility : true,
        noteContent : {
          id : action.payload.id,
          text : action.payload.text
        }
      };
   
    case UPDATENOTE:
      let result = [...state.notes];
      const index = result.findIndex(el => el.id === action.payload.id);
      result[index].text = action.payload.text
      return {
        ...state,
        notes : result,
        visibility : false
      };
    case DELETENOTE:
      let result2 = [...state.notes];
      let filter = result2.filter(function(value, index, arr){
        return value.id !== action.payload
      });

      return {
        ...state,
        notes : filter,
        visibility : false,
      };

    default:
      return state;
  }
};
