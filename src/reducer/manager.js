import { COLLAPSED } from "../constant";
const initialState = {
  collapsed: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSED:
      return {...state, collapsed: action.payload};
  
    default:
      return state;
  }
}

export default reducer;