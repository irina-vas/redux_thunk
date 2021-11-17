import React, {useEffect}  from 'react';
import './Posts.css';
import { fetchPosts, fetchUsers } from '../Redux/asyncAction';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const users = useSelector(state => state.users);


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);



  let filteredById = users.map(i => {
    if(i.id) {
      let object = [...posts].filter(({ userId }) => userId === i.id)
      return {...i, posts: object}
    }
  })

  //console.log(filteredById)



 

  return (
    <div className="wrapper_posts">
      <div className="users_with_posts">
      {filteredById.map((item, index) => {
        return (
          <div  key={index}>
           <Link to={`/posts/${item.id}`} className="post_title"><div>{item.name}</div></Link>
           {/* <div>{i.userId}</div> */}
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Posts;