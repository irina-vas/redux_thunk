import { addUsers } from "./actions";


export const fetchUsers = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addUsers(json)))
  }
}



// export const fetchUsers = () => {
//   return dispatch => { //возвращаем функцию. 
//       axios.get("https://jsonplaceholder.typicode.com/users")
//       // dispatch(actionPending())
//       .then(
//           data => dispatch(actionResolved(data)),
//           error => dispatch(actionRejected(error))
//       )
//   }
// }