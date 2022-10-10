import { Menu } from "@mui/icons-material"
import { Button } from "@mui/material"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "../styles/navbar.module.css"

function Navbar() {
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
    <nav className={style.navbar}>
      <div className={style.flex}>
        <Link to="/">
          <img src={imageUrl} alt="" srcset="" />
        </Link>
        <ul>
          <Link
            to="/teacher-schools"
            className={style.link}
            activeClassName={style.active}
          >
            <li className={style.border_right}>Teachers/Schools</li>
          </Link>
          <Link
            to="/families-individual"
            className={style.link}
            activeClassName={style.active}
          >
            <li className={style.border_right}>Families/Individuals</li>
          </Link>
          <Link
            to="/students"
            className={style.link}
            activeClassName={style.active}
          >
            <li className={style.border_right}>Students</li>
          </Link>
          <Link
            to="/about"
            className={style.link}
            activeClassName={style.active}
          >
            <li className={style.border_right}>About</li>
          </Link>
          <Link
            to="/contactus"
            className={style.link}
            activeClassName={style.active}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <Button
        className={style.navButton}
        variant="contained"
        sx={{
          backgroundColor: "#303d4e",
          width: 104,
          height: "45px",
          textTransform: "unset",
          fontSize: "14px",
          fontFamily: "georgiaAb",
          "&:hover": {
            backgroundColor: "#303d4e",
            opacity: 0.8,
          },
          padding: "2px 30px",
        }}
      >
        Login
      </Button>
      <Menu
        className={style.menuIcon}
        sx={{
          fontSize: "50px",
          color: "#303d4e",
          cursor: "pointer",
        }}
      />
    </nav>
  )
}

export default Navbar
