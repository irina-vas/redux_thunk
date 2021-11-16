import { ADD_USERS, ADD_POSTS } from "./constants";



let data = {
  users: [],
  // posts: [],
};



export const reducer = (state = data, action) => {
  switch (action.type) {

    case ADD_USERS:
      return {
        ...state, users: [...state.users, ...action.payload]

      }

    // case ADD_POSTS:
    //   return {

    //   }

    default:
      return state;
  };
}


// export const actionPending = () => ({ type: 'SET_STATUS', status: 'PENDING', payload: null, error: null })
// export const actionResolved = payload => ({ type: 'SET_STATUS', status: 'RESOLVED', payload, error: null })
// export const actionRejected = error => ({ type: 'SET_STATUS', status: 'REJECTED', payload: null, error })