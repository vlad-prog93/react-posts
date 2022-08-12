import React from "react"
export const useSortPost = (posts, sort) => {
  const sortedPosts = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [posts, sort])

  return sortedPosts
}

export const useSortAndFilterPosts = (posts, sort, query) => {
  const sortedPosts = useSortPost(posts, sort)

  const sortedAndFiltredPosts = React.useMemo(() => {
    if (query) {
      return [...sortedPosts].filter(post => post.title.includes(query))
    }
    return sortedPosts
  }, [query, sortedPosts])

  return sortedAndFiltredPosts
}