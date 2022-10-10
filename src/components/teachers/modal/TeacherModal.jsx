import { Close } from "@mui/icons-material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Slider from "react-slick"
import * as style from "../teacher.module.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function TeacherModal({ open, setOpen }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div>
        <div></div>
      </div>
    ),
    nextArrow: (
      <div>
        <div></div>
      </div>
    ),
    arrows: true,
    className: "modalArrow",
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeacherPage {
        nodes {
          caraouselImages {
            url
          }
        }
      }
    }
  `)
  const imgUrls = data.allContentfulTeacherPage.nodes[0].caraouselImages
  console.log(imgUrls)
  return (
    <div className={style.modalImagePopUp}>
      <Slider {...settings}>
        {imgUrls.map(items => {
          return <img src={items.url} alt="" srcset="" />
        })}
      </Slider>
      <div
        className={style.modalText}
        style={{
          color: "#fff",
          paddingInline: "80px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: "0",
          }}
        >
          Modal Caraousel Head
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          ratione quidem placeat fuga autem ab odio vitae sint quos
          perspiciatis!
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
        }}
      >
        <Close
          onClick={() => setOpen(!open)}
          sx={{
            fontSize: "52px",
            color: "#fff",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  )
}

export default TeacherModal
