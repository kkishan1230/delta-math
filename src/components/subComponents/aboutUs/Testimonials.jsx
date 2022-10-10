import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Slider from "react-slick"
import BackArrow from "../../BackArrow"
import Forward from "../../Forward"
import * as style from "./about.module.css"

function Testimonials() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAllQuotesAndReferencesQuotesAndReferencesJsonNode {
        nodes {
          quotes {
            quote
            refernce
          }
        }
      }
      allContentfulQuote {
        nodes {
          quote {
            url
          }
        }
      }
    }
  `)
  const allData =
    data.allContentfulAllQuotesAndReferencesQuotesAndReferencesJsonNode.nodes[0]
      .quotes
  const url = data.allContentfulQuote.nodes[0].quote.url
  console.log(url)
  const settings = {
    className: "about_caraousel",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div>
        <BackArrow />
      </div>
    ),
    nextArrow: (
      <div>
        <Forward />
      </div>
    ),
  }
  return (
    <div className={style.sliderContainer}>
      <Slider {...settings} className={style.slider}>
        {allData.map(items => {
          return (
            <div>
              <div className={style.quoteImage}>
                <img src={url} alt="" srcset="" />
              </div>
              <div className={style.quote}>{items.quote}</div>
              <div className={style.reference}>{items.refernce}</div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Testimonials
