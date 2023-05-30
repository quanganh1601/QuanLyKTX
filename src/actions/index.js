import { COLLAPSED } from "../constant";

export const handleCollapsed = (collapsed) =>(dispatch, getState) => {
  dispatch({
    type: COLLAPSED,
    payload: collapsed,
  })
}
