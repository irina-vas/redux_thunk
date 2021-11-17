import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function PostOfUser() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  const { id } = useParams();
  console.log(id)
  console.log(posts)

  let postResult = posts.filter(item => item.userId === +id)

  console.log(postResult)

  return (
    <div className="wrapper_user">
      {postResult.map(item => {

        return (
          <div key={item.id} className="wrapper_card">
           {item.title}
          </div>
        )
      })}
    </div>
  );
}

export default PostOfUser;