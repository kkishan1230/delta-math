import { graphql, useStaticQuery } from "gatsby"
import React from "react"

function PaymentIcon() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFamiliesPage {
        nodes {
          iconImage {
            url
          }
        }
      }
    }
  `)
  const paymentUrl = data.allContentfulFamiliesPage.nodes[0].iconImage.url
  return (
    <div>
      <img
        src={paymentUrl}
        alt=""
        style={{
          width: "100%",
        }}
      />
    </div>
  )
}

export default PaymentIcon
