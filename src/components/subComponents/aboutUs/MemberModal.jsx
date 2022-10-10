import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./about.module.css"
import CloseIcon from "@mui/icons-material/Close"

function MemberModal({ id, open, setOpen }) {
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
          aboutMember {
            aboutMember
          }
        }
      }
    }
  `)
  const memArr = data.allContentfulTeamMemberCard.nodes

  const memData = memArr.filter(item => {
    return item.id === id
  })

  return (
    <div className={style.modalCardContainer}>
      <div className={style.closeMark}>
        <CloseIcon
          onClick={() => setOpen(!open)}
          className={style.muiIcon}
          fontSize="large"
        />
      </div>
      <div className={style.memDetails}>
        <div className={style.imageContainer}>
          <div>
            <img src={memData[0].memberPhoto.url} alt="" />
          </div>
          <div className={style.cardText}>
            <h3>{memData[0].memberName}</h3>
            <p>{memData[0].designation}</p>
          </div>
        </div>
        <p>{memData[0].aboutMember.aboutMember}</p>
      </div>
    </div>
  )
}

export default MemberModal
