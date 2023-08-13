import {
  COLLAPSED,
  GET_INFO_USER,
  UPDATE_INFO_USER
} from "../constant";
const initialState = {
  collapsed: false,
  inforUser: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSED:
      return {...state, collapsed: action.payload};
    
    case GET_INFO_USER:
      return { ...state, inforUser: action.payload[0] };

    case UPDATE_INFO_USER:
      return { ...state, inforUser: action.payload };

    default:
      return state;
  }
}

export default reducer;