import React, { useState } from "react"
import { useEffect } from "react"
import Flip from "./Flip"

export default function FlipCounter() {
  const [unitsPlace, setUnit] = useState(0)
  const [tensPlace, setTens] = useState(0)
  const [hundredsPlace, setHundreds] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setUnit(unitsPlace + 1)
      if (unitsPlace === 9) {
        setUnit(0)
        setTens(tensPlace + 1)
      }
      if (tensPlace === 9) {
        setHundreds(hundredsPlace + 1)
        setTens(0)
      }
    }, 2000)
    return () => clearInterval(interval)
  })

  return (
    <div className="tickFlipContainer">
      <div className="tickFlip">
        <Flip value={3} />
        <Flip value={2} />
        <p
          style={{
            fontSize: "3.6rem",
            margin: "0 8px",
            fontFamily: "georgia1",
            color: "#fff",
            fontWeight: "600",
          }}
        >
          ,
        </p>
        <Flip value={hundredsPlace} />
        <Flip value={tensPlace} />
        <Flip value={unitsPlace} />
      </div>
      <div className="Line">Problems solved with DeltaMath</div>
    </div>
  )
}
