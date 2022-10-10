import { Button, Modal } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { useState } from "react"
import ModalComponent from "./ModalComponent"
import * as style from "./studentsPage.module.css"

function QuickVideo() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(!open)
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulStudentsPage {
        nodes {
          quickTour
        }
      }
    }
  `)
  console.log(data.allContentfulStudentsPage.nodes[0].quickTour)
  return (
    <div className={style.quickVideoContainer}>
      <Modal
        className={style.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalComponent open={open} setOpen={setOpen} />
      </Modal>
      <div className={style.outerFlex}>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wyk2jjEvs4U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={style.innerFlex}>
          <div className={style.text}>
            {data.allContentfulStudentsPage.nodes[0].quickTour}
          </div>
          <Button
            onClick={handleClose}
            className={style.button}
            variant="outlined"
            size="large"
            sx={{
              height: "60px",
              fontSize: "20px",
              color: "black",
              border: "1px solid black",
            }}
          >
            Create account
          </Button>
        </div>
      </div>
    </div>
  )
}

export default QuickVideo
