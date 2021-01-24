import { ADD_USER } from "./actionTypes";

let nextUserid = 6;

export const addUser = (content) => ({
  type: ADD_USER,
  payload: {
    id: ++nextUserid,
    data: content,
  },
});
