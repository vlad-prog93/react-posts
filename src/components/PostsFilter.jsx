import React from "react"
import MySelect from "./MyComponents/MySelect/MySelect"
import MyInput from "./MyComponents/MyInput/MyInput"


const PostsFilter = ({ selectFilter, setSelectFilter }) => {
  return (
    <div className="postfilter">
      <MyInput 
      value={selectFilter.query} 
      onChange={e => setSelectFilter({...selectFilter, query: e.target.value})} 
      placeholder='Поиск...' />
      
      <MySelect
        options={[
          { value: 'id', name: 'по умолчанию' },
          { value: 'title', name: 'по названию' },
          { value: 'about', name: 'по описанию' },
        ]}
        defaultValue='сортировка по'
        value={selectFilter.sort}
        onChange={sort => setSelectFilter({...selectFilter, sort})} />
    </div>
  )
}

export default PostsFilter