import { Modal } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import * as style from "./about.module.css"
import MemberModal from "./MemberModal"

function DeltaTeam() {
  const [id, setId] = useState("")
  const [open, setOpen] = useState(false)
  const handleClose = item => {
    setOpen(!open)
    setId(item.id)
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamMemberCard {
        nodes {
          designation
          memberName
          memberPhoto {
            url
          }
          id
        }
      }
    }
  `)
  const cardArr = data.allContentfulTeamMemberCard.nodes

  return (
    <div className={style.teamContainer}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MemberModal id={id} open={open} setOpen={setOpen} />
      </Modal>
      <h1>DeltaMath Team</h1>
      <div className={style.teamCardContainer}>
        {cardArr.map(item => {
          return (
            <div
              className={style.memberCard}
              key={item.id}
              onClick={() => handleClose(item)}
            >
              <img src={item.memberPhoto.url} alt="" />
              <div className={style.cardText}>
                <div className={style.name}>{item.memberName}</div>
                <div className={style.designation}>{item.designation}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DeltaTeam
