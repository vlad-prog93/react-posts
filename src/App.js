import './App.css'

import React from 'react';

import './styles/styles.css'
import PostList from './components/PostList';
import PostsFilter from './components/PostsFilter';
import PostForm from './components/PostForm';
import MyModal from './components/MyComponents/MyModal/MyModal';
import MyButton from './components/MyComponents/MyButton/MyButton';
import MyLoader from './components/MyComponents/MyLoader/MyLoader';
import { useSortAndFilterPosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import axios from 'axios';


function App() {
  const [posts, setPosts] = React.useState([])
  const [selectFilter, setSelectFilter] = React.useState({
    sort: '',
    query: ''
  })
  const [totalPosts, setTotalPosts] = React.useState(0)
  const [totalPages, setTotalPages] = React.useState(1)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [limitPosts, setLimitPosts] = React.useState(10)

  const [visibleModal, setVisibleModal] = React.useState(false)
  const sortedAndFiltredPosts = useSortAndFilterPosts(posts, selectFilter.sort, selectFilter.query)
  
  const [getPosts, isPostsLoading, error] = useFetching(async () => {
    const response = await axios(`https://jsonplaceholder.typicode.com/posts?_limit=${limitPosts}&_page=${currentPage}`)
    setTotalPosts(response.headers['x-total-count'])
    setTotalPages(() => {
      return Math.ceil(response.headers['x-total-count'] / limitPosts)
    })
    setPosts(response.data)
  })

  const getPagePosts = async (e) => {
    const response = await axios(`https://jsonplaceholder.typicode.com/posts?_limit=${limitPosts}&_page=${e.target.textContent}`)
    setCurrentPage(+e.target.textContent)
    setPosts(response.data)
  }

  const addPost = (newPost, setNewPost) => {
    setPosts([...posts, { ...newPost, id: (posts.length + 1).toString() }])
    setNewPost({ ...newPost, title: '', about: '' })
    setVisibleModal(false)
  }
  const deletePost = (post) => {
    setPosts([...posts].filter(item => item.id !== post.id))
  }

  React.useEffect(() => {
    setTimeout(async () => {
      getPosts()
    }, 2000)

  }, [])

  return (
    <div className="App">
      <MyButton onClick={() => setVisibleModal(true)}>Создать пост</MyButton>
      <hr style={{ margin: '20px 0', height: '1px', width: '100%' }} />
      <PostsFilter selectFilter={selectFilter} setSelectFilter={setSelectFilter} />
      {error && <h1>error</h1>}
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><MyLoader /></div>
        : <PostList posts={sortedAndFiltredPosts} title={'Список языков программирования'} deletePost={deletePost} />
      }
      {[...Array(totalPages).keys()].map(p => <MyButton className={(p+1) == currentPage ? 'MyButton MyButton_active' : 'MyButton'} key={p} onClick={getPagePosts}>{p+1}</MyButton>)}
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm addPost={addPost} />
      </MyModal>
    </div>
  );
}

export default App;
