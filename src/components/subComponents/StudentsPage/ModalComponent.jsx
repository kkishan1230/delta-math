import { Button, TextField } from "@mui/material"
import React from "react"
import * as style from "../../../styles/componentsStyles/componentModal.module.css"

function ModalComponent({ open, setOpen }) {
  return (
    <div className={style.modalContainer}>
      <form>
        <h5>Course Registration</h5>
        <TextField
          label="Course Code or Teacher Code"
          variant="outlined"
          sx={{
            width: "220px",
            color: "#2d2d2d;",
          }}
        />
        <p>
          A course code is provided by your teacher and gives you free access to
          their assignments.
        </p>
        <Button
          variant="outlined"
          className={style.btn}
          onClick={() => setOpen(!open)}
        >
          Cancel
        </Button>
      </form>
    </div>
  )
}

export default ModalComponent
