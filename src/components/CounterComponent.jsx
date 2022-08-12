import React from "react"

class CounterComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }


  increment() {
    this.setState({ likes: this.state.likes += 1 })
    console.log(this.state.likes)
  }

  decrement() {
    this.setState({ likes: this.state.likes -= 1 })
    console.log(this.state.likes)
  }

  render() {
    return (
      <div>
        <h1>{this.state.likes}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}

export default CounterComponent