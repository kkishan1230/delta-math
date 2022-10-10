import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import * as style from "../../styles/componentsStyles/CaraouselComponent.module.css"
import BackArrow from "../BackArrow"
import Forward from "../Forward"

function CaraouselComponent() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],

    prevArrow: (
      <div>
        <BackArrow boxShadow="rgb(108, 108, 108) -2px 2px 0px" />
      </div>
    ),
    nextArrow: (
      <div>
        <Forward boxShadow="rgb(108, 108, 108) -2px 2px 0px" />
      </div>
    ),
    arrows: true,
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulQuote {
        nodes {
          quote {
            url
          }
        }
      }
      allContentfulCaraouselHeading {
        nodes {
          heading
        }
      }
      allContentfulClient1 {
        nodes {
          designation
          clientPhoto {
            url
          }
          childContentfulClient1DescriptionsTextNode {
            descriptions
          }
        }
      }
    }
  `)

  const quoteImageURL = data.allContentfulQuote.nodes[0].quote.url
  const clientCard = data.allContentfulClient1.nodes
  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h2 className={style.head}>
        {data.allContentfulCaraouselHeading.nodes[0].heading}
      </h2>
      <div className={style.homeCaraouselSliderContainer}>
        <Slider {...settings}>
          {clientCard.map((card, index) => {
            return (
              <div className={style.caraouselContainer} key={index}>
                <div className={style.textContainer}>
                  <div>
                    <img src={quoteImageURL} alt="quote" />
                  </div>
                  <div className={style.quoteDescription}>
                    {
                      card.childContentfulClient1DescriptionsTextNode
                        .descriptions
                    }
                  </div>
                  <img
                    src={card.clientPhoto.url}
                    alt=""
                    srcset=""
                    width="150px"
                  />
                  <div className={style.clientName}>Name</div>
                  <div className={style.clientDesignation}>
                    {card.designation}
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default CaraouselComponent
