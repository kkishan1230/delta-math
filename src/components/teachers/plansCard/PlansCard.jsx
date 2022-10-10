import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./plansCard.module.css"

function PlansCard() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeacherPage {
        nodes {
          features {
            freePlan
          }
        }
      }
    }
  `)
  const featuresArr = data.allContentfulTeacherPage.nodes[0].features.freePlan
  return (
    <div className={style.plansCardContainer}>
      <div className={style.cardFlex}>
        <div className={style.planType}>DeltaMath Teacher</div>
        <div>
          <div className={style.planTitle}>Free</div>
          <div className={style.freeFeatures}>
            {featuresArr.map(item => {
              return <li>{item}</li>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlansCard
