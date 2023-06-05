import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  GetRandomNumber = () => {
    const getrandomnumber = Math.ceil(Math.random() * 100)
    this.setState({count: getrandomnumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgcontainer">
        <div className="cardcontainer">
          <h1 className="headingsty">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            className="btnsty"
            type="button"
            onClick={this.GetRandomNumber}
          >
            Generate
          </button>
          <h1 className="changingnumber">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
