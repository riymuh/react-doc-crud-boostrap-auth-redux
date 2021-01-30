import { ADD_USER } from "./actionTypes";

let nextUserid = 6;

export const addUser = (content) => ({
  type: ADD_USER,
  payload: {
    id: ++nextUserid,
    //data: content,
    nama: content.nama,
    umur: content.umur,
    alamat: content.alamat,
    nohp: content.nohp,
  },
});
