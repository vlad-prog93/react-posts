import React from "react"
import MyInput from "./MyComponents/MyInput/MyInput"
import MyButton from "./MyComponents/MyButton/MyButton"
const PostForm = (props) => {

  const [newPost, setNewPost] = React.useState({
    id: Date.now(),
    title: '',
    about: ''
  })

  const changePostTitle = (e) => {
    setNewPost({...newPost, title: e.target.value})
  }

  const changePostDescription = (e) => {
    setNewPost({...newPost, about: e.target.value})
  }

  const addPost = (e) => {
    e.preventDefault()
    props.addPost(newPost, setNewPost, e)
  }
  return (
    <form className='form' onSubmit={addPost} action='POST'>
      <MyInput onChange={changePostTitle} value={newPost.title} placeholder='Название поста' />
      <MyInput onChange={changePostDescription} value={newPost.about} placeholder='Описание поста' />
      <MyButton>Добавить</MyButton>
    </form>
  )
}

export default PostForm