import React from "react"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Post from "./Post"


const PostList = ({ posts, title, deletePost }) => {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center', color: 'red' }}>Посты не найдены</h1>
    )
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
      {posts.map((value) => {
        return (
          <CSSTransition
            key={value.id}
            timeout={300}
            classNames="post"
          >
            <Post post={value} number={value.id} deletePost={deletePost} />
          </CSSTransition>
        )})}

    </TransitionGroup>
      

    </div>
  )
}

export default PostList