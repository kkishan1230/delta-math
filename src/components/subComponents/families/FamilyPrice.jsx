import { Button } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./families.module.css"

function FamilyPrice() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFamiliesPage {
        nodes {
          featureOffer
          featuresOfPlan {
            Data {
              course {
                heading
                list
              }
              pods {
                heading
                list
              }
            }
          }
        }
      }
      allContentfulTeacherPage {
        nodes {
          features {
            freePlan
          }
        }
      }
    }
  `)
  const listItem = data.allContentfulTeacherPage.nodes[0].features.freePlan
  const featureOffer = data.allContentfulFamiliesPage.nodes[0].featureOffer
  const courseHead =
    data.allContentfulFamiliesPage.nodes[0].featuresOfPlan.Data.course.heading
  const podHead =
    data.allContentfulFamiliesPage.nodes[0].featuresOfPlan.Data.pods.heading

  const podList =
    data.allContentfulFamiliesPage.nodes[0].featuresOfPlan.Data.pods.list
  const courseList =
    data.allContentfulFamiliesPage.nodes[0].featuresOfPlan.Data.course.list

  return (
    <div className={style.familyPriceContainer}>
      <div className={style.familyPriceCard}>
        <div className={style.heading}>DeltaMath Family/Individual</div>
        <div className={style.headText}>
          <h2 className={style.price}>$7.95/month</h2>
          <p>
            <i>per student</i>
          </p>
        </div>
        <div>
          {listItem.map((items, index) => {
            return <p key={index}>{items}</p>
          })}
        </div>
        <Button className={style.button} size="large">
          Sign Up
        </Button>
      </div>
      <div className={style.textOffer}>
        <div className={style.offerHead}>{featureOffer}</div>
        <div className={style.podAndCourses}>
          <div>
            <h5>{courseHead}</h5>
            <div className={style.lists}>
              {courseList.map((items, index) => {
                return <li>{items}</li>
              })}
            </div>
          </div>
          <div>
            <h5>{podHead}</h5>
            <div className={style.lists}>
              {podList.map((items, index) => {
                return <li>{items}</li>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FamilyPrice
