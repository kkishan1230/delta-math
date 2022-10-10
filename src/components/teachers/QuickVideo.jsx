import { Button } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./teacher.module.css"

function QuickVideo() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeacherPage {
        nodes {
          quickTour
        }
      }
    }
  `)
  const quickTour = data.allContentfulTeacherPage.nodes[0].quickTour
  console.log(quickTour)
  return (
    <div className={style.quickVideoContainer}>
      <div className={style.outerFlex}>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NV5-1xZ9_ss"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={style.watchVideoHeading}>
          <h3>{quickTour}</h3>
          <div>
            <div className={style.getStarted}>Get Started</div>
            <div className={style.designationContainer}>
              <div>
                <p>Teachers:</p>
                <Button className={style.btn}>CreateAccount</Button>
              </div>
              <div>
                <p>Schools/Districts:</p>
                <Button className={style.btn}>Get Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickVideo
