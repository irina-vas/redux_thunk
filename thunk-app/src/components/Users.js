import React, {useEffect} from 'react';
import { fetchUsers } from '../Redux/asyncAction';
import { useDispatch, useSelector } from 'react-redux';
import './Users.css';
import { Link } from "react-router-dom";
import Loader from './ Loader/Loader';

function Users() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  if (loading) {
    return (
      <div className="loader"><Loader /></div>
    )
  }

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