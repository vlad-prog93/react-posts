import React from "react"

const CounterContainer = () => {
  const [likes, setLikes] = React.useState(0)

  const increment = () => {
    setLikes(likes => likes += 1)
    console.log(likes)
  }

  const decrement = () => {
    setLikes(likes => likes -= 1)
    console.log(likes)
  }

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>deccrement</button>
    </div>
  )
}

export default CounterContainer