import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 5}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 2}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrement
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
