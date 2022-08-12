import React from "react"
import MyButton from "./MyComponents/MyButton/MyButton"
const Post = (props) => {

  const deletePost = () => {
    props.deletePost(props.post)
  }

  return (
    <div className='post'>
      <div className='post__name'>
        <h4 className='post__title'>{props.number}. {props.post.title}</h4>
        <div className='post__description'> {props.post.about}</div>
      </div>
      <MyButton onClick={deletePost}>Удалить</MyButton>
    </div>
  )
}

export default Post