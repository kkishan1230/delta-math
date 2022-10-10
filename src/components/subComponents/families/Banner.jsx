import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./families.module.css"

function Banner() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFamiliesPage {
        nodes {
          banner {
            url
          }
        }
      }
    }
  `)
  const url = data.allContentfulFamiliesPage.nodes[0].banner.url
  return (
    <div
      className={style.banner1}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div>
        <h3>DeltaMath for</h3>
        <h1>Families/Individual</h1>
      </div>
    </div>
  )
}

export default Banner
