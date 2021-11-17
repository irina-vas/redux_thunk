import React, {useEffect} from 'react';
import { fetchUsers } from '../Redux/asyncAction';
import { useDispatch, useSelector } from 'react-redux';
import './Users.css';
import { Link } from "react-router-dom";

function Users() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  return (
    <div className="wrapper_users">
      {users.map((i, index) => {
        return (
          <div className="user_name" key={index}>
            <Link to={`/users/${i.id}`} className="user_link">{i.name}</Link>
          </div>
        )
      })}

    </div>
  );
}

export default Users;