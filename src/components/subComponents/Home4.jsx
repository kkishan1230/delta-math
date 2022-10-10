import React from "react"
import * as style from "../../styles/componentsStyles/home4.module.css"
import { graphql, useStaticQuery } from "gatsby"
import { LearnMoreBtn } from "../../styles/muiStyles/HomeSection3"

function Home4() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHome3 {
        nodes {
          person {
            url
          }
          macPro {
            url
          }
          description {
            description
          }
          title
        }
      }
    }
  `)

  const person = data.allContentfulHome3.nodes[1].person
  const macPro = data.allContentfulHome3.nodes[1].macPro
  const description = data.allContentfulHome3.nodes[1].description
  const title = data.allContentfulHome3.nodes[1].title

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f0eeef",
        position: "relative",
      }}
    >
      <div className={style.home4}>
        <div className={style.contents}>
          <div>
            <h2>{title}</h2>
          </div>
          <p>{description.description}</p>
          <LearnMoreBtn variant="contained">Learn More</LearnMoreBtn>
        </div>
        <div className={style.images}>
          <img src={person.url} alt="Person" className={style.absoluteImage} />
          <div>
            <img src={macPro.url} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home4
