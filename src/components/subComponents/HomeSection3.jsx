import React from "react"
import { LearnMoreBtn } from "../../styles/muiStyles/HomeSection3"
import * as style from "../../styles/componentsStyles/home3.module.css"
import { graphql, useStaticQuery } from "gatsby"

function HomeSection3() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHome3 {
        nodes {
          title
          macPro {
            url
          }
          description {
            description
          }
          person {
            url
          }
        }
      }
    }
  `)

  var x = data.allContentfulHome3.nodes[0]
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <div className={style.home3}>
        <div className={style.contents}>
          <div>
            <h2>{x.title}</h2>
          </div>
          <p>{x.description.description}</p>
          <div>
            <LearnMoreBtn variant="contained">Learn More</LearnMoreBtn>
          </div>
        </div>
        <div className={style.images}>
          <img
            src={x.person.url}
            alt="Person"
            className={style.absoluteImage}
          />
          <div>
            <img src={x.macPro.url} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection3
