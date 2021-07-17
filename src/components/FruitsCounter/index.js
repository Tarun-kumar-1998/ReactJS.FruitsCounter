import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  eatMango = () => {
    const {mango} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg">
        <div className="bg2">
          <h1 className="hd">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="bg3">
            <div className="bg4">
              <img
                alt="mango"
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button className="btn" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="bg4">
              <img
                alt="banana"
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button className="btn" type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
