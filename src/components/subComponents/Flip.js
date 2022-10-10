import React from "react"

import * as Tick from "@pqina/flip"
import "@pqina/flip/dist/flip.min.css"

export default class Flip extends React.Component {
  constructor(props) {
    super(props)
    this._tickRef = React.createRef()
  }

  componentDidMount() {
    console.log(Tick)

    this._tickInstance = Tick.default.DOM.create(this._tickRef.current, {
      value: this.props.value,
    })
  }

  componentDidUpdate() {
    if (!this._tickInstance) return
    this._tickInstance.value = this.props.value
  }

  componentWillUnmount() {
    if (!this._tickInstance) return
    Tick.default.DOM.destroy(this._tickRef.current)
  }

  render() {
    return (
      <div ref={this._tickRef} className="tick">
        <div data-repeat="true" aria-hidden="true" className="tickCard">
          <span data-view="flip">Tick</span>
        </div>
      </div>
    )
  }
}
