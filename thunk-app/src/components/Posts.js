import React, {useEffect}  from 'react';
import './Posts.css';
import { fetchPosts, fetchUsers } from '../Redux/asyncAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Loader from './ Loader/Loader';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading)


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loader"><Loader /></div>
    )
  }


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
          <div key={index} className="post_title">
           <Link to={`/posts/${item.id}`}><div>{item.name}</div></Link>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Posts;