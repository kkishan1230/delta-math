import { graphql, useStaticQuery } from "gatsby"
import React from "react"

function IconI() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFamiliesPage {
        nodes {
          iconI {
            url
          }
        }
      }
    }
  `)
  const url = data.allContentfulFamiliesPage.nodes[0].iconI.url
  return (
    <img
      src={url}
      alt=""
      style={{
        width: "20px",
      }}
    />
  )
}

export default IconI
