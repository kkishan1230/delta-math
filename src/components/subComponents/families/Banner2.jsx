import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./families.module.css"

function Banner2() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFamiliesPage {
        nodes {
          banner2 {
            url
          }
          banner2Text
        }
      }
    }
  `)
  const bannerImage = data.allContentfulFamiliesPage.nodes[0].banner2.url
  const bannerText = data.allContentfulFamiliesPage.nodes[0].banner2Text
  const textPart1 = bannerText.substr(0, 106)
  console.log(textPart1)
  return (
    <div
      className={style.banner2}
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className={style.banner2Text}>
        {bannerText.substr(0, 106)} <span>{bannerText.substr(106, 138)}</span>
      </div>
    </div>
  )
}

export default Banner2
