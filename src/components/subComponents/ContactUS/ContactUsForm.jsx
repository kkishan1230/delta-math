import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { useState } from "react"
import * as style from "./contactUs.module.css"

function ContactUsForm() {
  const [selectedOption, setSelectedOption] = useState("")
  const [selectedOption2, setSelectedOption2] = useState("")
  const handleChange = el => {
    setSelectedOption(el.target.value)
  }
  const handleChange2 = el => {
    setSelectedOption2(el.target.value)
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulContactUs {
        nodes {
          formHeading
        }
      }
    }
  `)

  const formHeading = data.allContentfulContactUs.nodes[0].formHeading

  return (
    <div className={style.contactUsFromWrapper}>
      <div className={style.contactUsFormsContainer}>
        <h2>Contact us</h2>
        <p>{formHeading}</p>
        <div className={style.contactUsForms}>
          <div className={style.flex1}>
            <p>I'm a...</p>
            <FormControl>
              <InputLabel id="contactformInput1">--select--</InputLabel>
              <Select
                labelId="contactformInput1"
                value={selectedOption}
                label="--select--"
                onChange={el => handleChange(el)}
              >
                <MenuItem value="Teacher">Teacher</MenuItem>
                <MenuItem value="Parent">Parent</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Name" type="text" />
            <TextField label="Email" type="Email" />
          </div>

          <div className={style.flex2}>
            <p>I have a question about...</p>
            <FormControl>
              <InputLabel id="contactformInput2">--select--</InputLabel>
              <Select
                labelId="contactformInput2"
                value={selectedOption2}
                label="--select--"
                onChange={el => handleChange2(el)}
              >
                <MenuItem value="Teacher">Teacher</MenuItem>
                <MenuItem value="Parent">Parent</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="message"
              inputProps={{
                style: {
                  height: 93,
                },
              }}
              multiline
            />
          </div>
        </div>
        <Button className={style.sendMessage} variant="contained" size="large">
          Send Message
        </Button>
      </div>
    </div>
  )
}

export default ContactUsForm
