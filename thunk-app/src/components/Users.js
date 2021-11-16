import React, {useEffect} from 'react';
import { fetchUsers } from '../Redux/asyncAction';
import { useDispatch, useSelector } from 'react-redux';
import './Users.css';

function Users() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  console.log(users)

  useEffect(() => {
    let data = dispatch(fetchUsers());
    console.log(data)
    console.log(1)
  }, [dispatch]);


  return (


    <div className="wrapper_users">
      {users.map(i => {
        return (
          <div className="user_name">{i.name}</div>
        )
      })}

    </div>
  );
}

export default Users;