import { Button, InputAdornment } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./families.module.css"
import IconI from "./icon/IconI"
import PaymentIcon from "./icon/PaymentIcon"
import { InputForFamily } from "./InputForFamily"
function GetStartedToday() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFamiliesPage {
        nodes {
          secureIconMedia {
            url
          }
          paymentText {
            paymentText
          }
        }
      }
    }
  `)
  const paymentText =
    data.allContentfulFamiliesPage.nodes[0].paymentText.paymentText
  const secureUrl = data.allContentfulFamiliesPage.nodes[0].secureIconMedia.url
  return (
    <div
      style={{
        backgroundColor: "#f3f1f2",
      }}
    >
      <div className={style.paymentParentContainer}>
        <h2>Get Started Today</h2>
        <form action="" className={style.form}>
          <div className={style.formChild}>
            <label htmlFor="name" className={style.label}>
              Personal Information
            </label>
            <div className={style.inputFields}>
              <div className={style.nameEmail}>
                <InputForFamily size="large" placeholder="Name" />
                <InputForFamily size="large" placeholder="Email Address" />
              </div>
              <div className={style.studentsZipcode}>
                <InputForFamily
                  size="large"
                  placeholder="Number of Students/Children"
                />
                <InputForFamily size="large" placeholder="Zipcode" />
              </div>
            </div>
            <label htmlFor="name" className={style.label}>
              Payment Information
            </label>
            <div className={style.paymentInfo}>
              <div className={style.cardNumber}>
                <InputForFamily
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PaymentIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  placeholder="Card Number"
                />
              </div>
              <div className={style.expDate}>
                <InputForFamily size="large" placeholder="Exp. Date(XX/XX)" />
                <InputForFamily
                  size="large"
                  placeholder="Security Code"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconI />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </form>
        <div className={style.paymentText}>{paymentText}</div>
        <div className={style.secureIcon}>
          <div>
            <img src={secureUrl} alt="" srcset="" />
          </div>
          <Button className={style.joinBtn}>Join DeltaMath</Button>
        </div>
      </div>
    </div>
  )
}

export default GetStartedToday
