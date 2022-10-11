import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import CaraouselComponent from "../components/subComponents/CaraouselComponent"
import Flip from "../components/subComponents/FlipCounter"
import Home4 from "../components/subComponents/Home4"
import HomeSection2 from "../components/subComponents/HomeSection2"
import HomeSection3 from "../components/subComponents/HomeSection3"

import "../styles/global.css"
import * as style from "../styles/index.module.css"
import { IndexButtons } from "../styles/muiStyles"

export default function Home({ data }) {
  console.log(data.allContentfulAsset.nodes[0].file.url)
  return (
    <div>
      <Layout>
        <section className={style.index}>
          <div className={style.head_container}>
            <h1>
              Math done <span>right</span>.
            </h1>
            <h1>Depth, clarity, and rigor.</h1>
            <div className={style.sub_head}>
              <h3>Built by teachers. Used by millions.</h3>
            </div>
            <div className={style.btn}>
              <Link to="/teacher-schools" className={style.noUnderline}>
                <IndexButtons variant="contained" size="large">
                  For Teachers/ Schools
                </IndexButtons>
              </Link>
              <Link to="/families-individual" className={style.noUnderline}>
                <IndexButtons variant="contained" size="large">
                  Families/ Individual
                </IndexButtons>
              </Link>
              <Link to="/students" className={style.noUnderline}>
                <IndexButtons variant="contained" size="large">
                  For Students
                </IndexButtons>
              </Link>
            </div>
          </div>
        </section>

        <HomeSection2 />
        <Home4 />
        <HomeSection3 />
        <CaraouselComponent />
        <Flip />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulAsset {
      nodes {
        contentful_id
        file {
          url
          fileName
        }
      }
    }
  }
`
