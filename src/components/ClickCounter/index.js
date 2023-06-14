import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`prevState count is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const count = this.state
    return (
      <div>
        <h1>
          The Button has clicked <span>{count}</span>
          times
        </h1>
        <p>Click the button to increase the count</p>
        <button onClick={this.onIncrement}>Click me</button>
      </div>
    )
  }
}
export default ClickCounter
