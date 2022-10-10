import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import * as style from "../../styles/componentsStyles/HomeSection2.module.css"

function HomeSection2() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDeltaMath {
        totalCount
        edges {
          node {
            titles
            image {
              url
            }
            description {
              description
            }
          }
        }
      }
    }
  `)

  //   console.log(data)
  var x = data.allContentfulDeltaMath.edges
  return (
    <div className={style.section2}>
      {x.map(elements => {
        return (
          <div>
            <div className={style.imageContainer}>
              <img src={elements.node.image.url} alt="" srcset="" />
            </div>
            <div className={style.contents}>
              <h3>{elements.node.titles}</h3>
              <p>{elements.node.description.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomeSection2
