import { ADD_USER } from "../actionTypes";

const initialState = {
  users: [],
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      console.log("helloredux");
      //   const { id, data } = action.payload;
      //   return {
      //     ...state,
      //     users: action.payload.data,
      //     // byIds: {
      //     //   ...state.byids,
      //     //   [id]: {
      //     //     content,
      //     //     completed: false,
      //     //   },
      //     // },
      //   };
    }

    default:
      return state;
  }
}
