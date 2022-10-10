import React from "react"
import "./arrow.css"

function Forward({ boxShadow }) {
  return (
    <div
      className="ForeArrow"
      style={{
        boxShadow: boxShadow,
      }}
    ></div>
  )
}

export default Forward
