import { ADD_USER } from "../actionTypes";

const initialState = {
  users: [
    {
      id: 1,
      nama: "test 1",
      umur: 25,
      alamat: "Jalan sokearno",
      nohp: "253164356124",
    },
  ],
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      console.log("helloredux");
      console.log(action);
      const { id, data } = action.payload;
      return {
        ...state,
        users: [...state.users, action.payload],
        // byIds: {
        //   ...state.byids,
        //   [id]: {
        //     content,
        //     completed: false,
        //   },
        // },
      };
    }

    default:
      return state;
  }
}
