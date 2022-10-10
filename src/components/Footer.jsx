import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "../styles/footer.module.css"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLogo {
        nodes {
          logo {
            url
          }
        }
      }
    }
  `)
  const imageUrl = data.allContentfulLogo.nodes[0].logo.url
  return (
    <footer className={style.footer}>
      <Link to="/">
        <img src={imageUrl} alt="" srcset="" />
      </Link>
      <div className={style.flex}>
        <Link
          to="/teacher-schools"
          className={style.text}
          activeClassName={style.active}
        >
          Teacher/Schools
        </Link>
        <Link
          to="/families-individual"
          className={style.text}
          activeClassName={style.active}
        >
          Families/Students
        </Link>
        <Link
          to="/students"
          className={style.text}
          activeClassName={style.active}
        >
          Students
        </Link>
        <Link to="/about" className={style.text} activeClassName={style.active}>
          About
        </Link>
        <Link
          to="/contactus"
          className={style.text}
          activeClassName={style.active}
        >
          Contact Us
        </Link>
      </div>
      <div className={style.termsContainer}>
        <div>
          <Link to="" className={style.terms}>
            © 2022 DeltaMath Solutions Inc.
          </Link>
          <Link to="" className={style.terms}>
            Terms of Service
          </Link>
          <Link to="" className={style.terms}>
            Privacy Policy
          </Link>
          <Link to="" className={style.terms}>
            Site Status
          </Link>
        </div>
        <div>
          <div>
            <Link to="">
              <FacebookOutlinedIcon
                fontSize="large"
                style={{
                  color: "#313d4e",
                }}
              />
            </Link>
            <Link to="">
              <FacebookOutlinedIcon
                fontSize="large"
                style={{
                  color: "#313d4e",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
