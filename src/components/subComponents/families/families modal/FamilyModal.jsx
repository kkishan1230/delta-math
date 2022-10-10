import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Slider from "react-slick"
import BackArrow from "../../../teachers/BackArrow"
import ForeArrow from "../../../teachers/ForeArrow"
import * as style from "../families.module.css"

function FamilyModal() {
  const settings = {
    className: "familyCaraousel center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    prevArrow: (
      <div>
        <BackArrow />
      </div>
    ),
    nextArrow: (
      <div>
        <ForeArrow />
      </div>
    ),
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeacherPage {
        nodes {
          caraouselImages {
            url
          }
          machBook {
            url
          }
        }
      }
    }
  `)
  const imagesCaraousel = data.allContentfulTeacherPage.nodes[0].caraouselImages
  const macPro = data.allContentfulTeacherPage.nodes[0].machBook.url
  console.log(macPro)
  return (
    <div className={style.familySliderContainer}>
      <Slider {...settings}>
        {imagesCaraousel.map(items => {
          return (
            <div className={style.familyModal}>
              <div>
                <img src={items.url} alt="" />
              </div>
            </div>
          )
        })}
      </Slider>
      <img src={macPro} alt="" />
    </div>
  )
}

export default FamilyModal
