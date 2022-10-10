import { Button } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./about.module.css"

function AboutDeltaMath() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutPageContent {
        nodes {
          aboutText {
            aboutText
          }
          aboutPageImage {
            url
          }
        }
      }
    }
  `)
  const url = data.allContentfulAboutPageContent.nodes[0].aboutPageImage.url
  const text = data.allContentfulAboutPageContent.nodes[0].aboutText.aboutText
  //   console.log(text)
  return (
    <div className={style.aboutDeltaMathWrapper}>
      <div className={style.aboutDeltaContainer}>
        <img src={url} alt="" srcset="" />
        <div className={style.textAndBtn}>
          <p>{text}</p>
          <Button variant="outlined" className={style.btn}>
            ContactUs
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutDeltaMath
