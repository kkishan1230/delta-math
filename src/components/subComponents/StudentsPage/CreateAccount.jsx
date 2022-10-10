import { Modal } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { IndexButtons } from "../../../styles/muiStyles"
import ModalComponent from "./ModalComponent"
import * as style from "./studentsPage.module.css"

function CreateAccount() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(!open)
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulStudentsPage {
        nodes {
          beginLine
        }
      }
    }
  `)

  return (
    <div className={style.beginLine}>
      <Modal
        className={style.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalComponent open={open} setOpen={setOpen} />
      </Modal>
      <div>
        <div>
          <p>{data.allContentfulStudentsPage.nodes[0].beginLine}</p>
        </div>

        <IndexButtons
          className={style.btn}
          onClick={handleClose}
          variant="contained"
          size="large"
          sx={{
            height: "60px",
            fontSize: "20px",
          }}
        >
          Create Account
        </IndexButtons>
      </div>
    </div>
  )
}

export default CreateAccount
