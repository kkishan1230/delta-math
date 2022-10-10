import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./teacher.module.css"

function Banner() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeacherPage {
        nodes {
          banner {
            url
          }
        }
      }
    }
  `)
  const url = data.allContentfulTeacherPage.nodes[0].banner.url
  return (
    <div
      className={style.bannerContainer}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className={style.textContainer}>
        <div>DeltaMath for</div>
        <h2>Teachers / Schools</h2>
      </div>
    </div>
  )
}

export default Banner
