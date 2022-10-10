import { Button } from "@mui/material"
import React from "react"
import * as style from "./teacher.module.css"

function CreateAccount() {
  return (
    <div className={style.CreateAccountContainer}>
      <div className={style.createAccount}>
        <div className={style.teachers}>
          <div>Teachers:</div>
          <Button className={style.button}>Create Account</Button>
        </div>
        <div className={style.schools}>
          <div>School Districts:</div>
          <Button className={style.button}>Get a Quote</Button>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
