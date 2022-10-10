import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./families.module.css"
import TeacherCaraousel from "../../teachers/TeacherCaraousel"

function FamiliesSection2() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFamiliesPage {
        nodes {
          deltaOffer
        }
      }
    }
  `)
  const offer = data.allContentfulFamiliesPage.nodes[0].deltaOffer
  return (
    <div className={style.section2}>
      <p className={style.offer}>{offer}</p>
      <TeacherCaraousel />
    </div>
  )
}

export default FamiliesSection2
