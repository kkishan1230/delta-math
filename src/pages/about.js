import React from "react"
import Layout from "../components/Layout"
import AboutBanner from "../components/subComponents/aboutUs/AboutBanner"
import AboutDeltaMath from "../components/subComponents/aboutUs/AboutDeltaMath"
import DeltaTeam from "../components/subComponents/aboutUs/DeltaTeam"
import Testimonials from "../components/subComponents/aboutUs/Testimonials"

function about() {
  return (
    <Layout>
      <AboutBanner />
      <AboutDeltaMath />
      <DeltaTeam />
      <Testimonials />
    </Layout>
  )
}

export default about
