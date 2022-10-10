import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./about.module.css"

function AboutBanner() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutPageContent {
        nodes {
          bannerImage {
            url
          }
          bannerText
        }
      }
    }
  `)
  const url = data.allContentfulAboutPageContent.nodes[0].bannerImage.url
  const text = data.allContentfulAboutPageContent.nodes[0].bannerText
  console.log(text)
  return (
    <div
      className={style.aboutBannerContainer}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div>
        <h1>
          Built by <span>teachers.</span>
        </h1>
        <div>{text}</div>
      </div>
    </div>
  )
}

export default AboutBanner
