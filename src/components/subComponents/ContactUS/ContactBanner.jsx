import { Button } from "@mui/material"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./contactUs.module.css"

function ContactBanner() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContactUs {
        nodes {
          bannerImage {
            url
          }
          bannerHeading
        }
      }
    }
  `)
  const bannerUrl = data.allContentfulContactUs.nodes[0].bannerImage.url
  const bannerHead = data.allContentfulContactUs.nodes[0].bannerHeading
  return (
    <div
      className={style.contactBannerContainer}
      style={{
        backgroundImage: `url(${bannerUrl})`,
      }}
    >
      <div className={style.contactBannerContent}>
        <h1>{bannerHead}</h1>
        <div className={style.btnFlex}>
          <Link to="/teacher-schools">
            <Button className={style.button}>Teacher/School</Button>
          </Link>
          <Link to="/families-individual">
            <Button className={style.button}>Families/Individuals</Button>
          </Link>
          <Link to="/students">
            <Button className={style.button}>Students</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
