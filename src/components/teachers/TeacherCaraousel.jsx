import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as style from "./teacher.module.css"
import BackArrow from "./BackArrow"
import ForeArrow from "./ForeArrow"
import { useState } from "react"
import TeacherModal from "./modal/TeacherModal"
import { Modal } from "@mui/material"

function TeacherCaraousel() {
  const [modalUrl, setUrl] = useState("")
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(!open)
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    initialSlide: 0,
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
    responsive: [
      {
        breakpoint: 699,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulTeacherPage {
        nodes {
          machBook {
            url
          }
          caraouselImages {
            url
          }
        }
      }
    }
  `)
  const allImages = data.allContentfulTeacherPage.nodes[0].caraouselImages
  const macPro = data.allContentfulTeacherPage.nodes[0].machBook.url
  return (
    <div className={style.sliderContainer}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <TeacherModal open={open} setOpen={setOpen} />
      </Modal>
      <Slider {...settings}>
        {allImages.map((item, index) => {
          return (
            <div
              key={index}
              onClick={element => {
                setUrl(item.url)
                handleClose()
              }}
            >
              <img src={item.url} alt="" />
              <div className={style.overlayTextContainer}>
                <h3>Overlay Heading</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  quia repellendus commodi eveniet ipsam debitis ad voluptatibus
                  nostrum repudiandae fuga?
                </p>
              </div>
            </div>
          )
        })}
      </Slider>
      <img className={style.macPro} src={macPro} alt="" />
    </div>
  )
}

export default TeacherCaraousel
