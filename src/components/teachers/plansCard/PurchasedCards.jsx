import React from "react"
import * as style from "./plansCard.module.css"

function PurchasedCards({
  cardTitle,
  bgColor,
  planPrice,
  allFeature,
  plusPlan,
}) {
  return (
    <div className={style.plansCardContainer}>
      <div className={style.cardFlex}>
        <div
          className={style.planType}
          style={{
            backgroundColor: `${bgColor}`,
          }}
        >
          {cardTitle}
        </div>
        <div>
          <div className={style.planTitle}>{planPrice}</div>
          <div className={style.freeFeatures}>
            <li>{allFeature}</li>
            <div
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "georgia1",
                fontSize: "19px",
              }}
            >
              Plus:
            </div>
            {plusPlan.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchasedCards
