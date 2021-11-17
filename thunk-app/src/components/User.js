import React, {useEffect} from 'react';
import './User.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function User() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const{ id } = useParams();
  console.log(id)
  console.log(users)

  return (
    <div className="wrapper_user">
      {users.filter(item => item.id === +id).map(item => {

        return (
          <div key={item.id} className="wrapper_card">
            <h2 className="name">{item.name}</h2>
            <p className="userName">user name:  {item.username}</p>
            <div className="adress">adress:
                <span className="city">{'  ' +item.address.city}, </span>
                <span className="suite">{item.address.suite}</span>
            </div>
            <p className="company">working in  {item.company.name}</p>
            <div className="contacts">
                <span>contacts:  </span>
                <span>{item.email},  </span>
                <span>{item.phone}</span>
          </div>
        </div>
        )
      })}
    </div>
  );
}

export default User;