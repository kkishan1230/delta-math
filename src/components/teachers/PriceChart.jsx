import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import PlansCard from "./plansCard/PlansCard"
import PurchasedCards from "./plansCard/PurchasedCards"
import * as style from "./teacher.module.css"

function PriceChart() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeacherPage {
        nodes {
          accountsType
          features {
            Plus
            PlusMore
            deltaMathIntegral
            deltaMathIntegralMore
            freePlan
          }
        }
      }
    }
  `)
  const plansHeading = data.allContentfulTeacherPage.nodes[0].accountsType
  const allFeature = data.allContentfulTeacherPage.nodes[0].features.Plus[0]
  const plusPlan = data.allContentfulTeacherPage.nodes[0].features.PlusMore
  const integralPlan =
    data.allContentfulTeacherPage.nodes[0].features.deltaMathIntegralMore
  console.log(integralPlan)

  return (
    <div className={style.priceChartContainer}>
      <div className={style.plansHeading}>{plansHeading}</div>
      <div className={style.priceCharts}>
        <PlansCard />
        <PurchasedCards
          cardTitle="DeltaMath Plus"
          bgColor="#f9a622"
          planPrice="$75/teacher"
          allFeature={allFeature}
          plusPlan={plusPlan}
        />
        <PurchasedCards
          cardTitle="DeltaMath XXXX"
          bgColor="#4893ba"
          planPrice="$XX/teacher"
          allFeature={allFeature}
          plusPlan={integralPlan}
        />
      </div>
    </div>
  )
}

export default PriceChart
