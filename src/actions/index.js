import { message } from "antd";
import { COLLAPSED } from "../constant";
import axios from "axios";
import {
  GET_INFO_USER,
  UPDATE_INFO_USER
} from "../constant";

export const handleCollapsed = (collapsed) =>(dispatch) => {
  dispatch({
    type: COLLAPSED,
    payload: collapsed,
  })
}

export const getInforUser = (access_token) => (dispatch) => {
  return axios.get(`http://localhost:3000/api/get_user?access_token=${access_token}`)
    .then((res) => {
      if (res.status == 200) {
        dispatch({
          type: GET_INFO_USER,
          payload: res.data
        })
        return res.data;
      }
    })
    .catch((err) => console.log("err", err))
}

export const updateInforUser = (access_token, values) => (dispatch) => {
  const url = `http://localhost:3000/api/update_info_user?access_token=${access_token}`;
  return axios.post(url, { data: values })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: UPDATE_INFO_USER,
          payload: values
        });
        return res.data;
      }
    })
    .catch((err) => console.log("err", err))

}
