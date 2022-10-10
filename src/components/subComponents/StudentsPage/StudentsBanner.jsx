import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./studentsPage.module.css"

function StudentsBanner() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulStudentsPage {
        nodes {
          banner {
            url
          }
        }
      }
    }
  `)

  return (
    <div
      className={style.StudentsBanner}
      style={{
        backgroundImage: `url(${data.allContentfulStudentsPage.nodes[0].banner.url})`,
      }}
    >
      <div className={style.bannerContent}>
        <div>DeltaMath for</div>
        <h1>Students</h1>
      </div>
    </div>
  )
}

export default StudentsBanner
