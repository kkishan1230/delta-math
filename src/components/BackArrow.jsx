import React from "react"
import "./arrow.css"

function BackArrow({ boxShadow }) {
  return (
    <div
      className="ArrowBack"
      style={{
        boxShadow: boxShadow,
      }}
    ></div>
  )
}

export default BackArrow
