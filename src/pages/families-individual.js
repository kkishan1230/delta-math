import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/subComponents/families/Banner"
import Banner2 from "../components/subComponents/families/Banner2"
import FamiliesSection2 from "../components/subComponents/families/FamiliesSection2"
import FamilyPrice from "../components/subComponents/families/FamilyPrice"
import GetStartedToday from "../components/subComponents/families/GetStartedToday"

function families_individual() {
  return (
    <Layout>
      <Banner />
      <FamiliesSection2 />
      <FamilyPrice />
      <Banner2 />
      <GetStartedToday />
    </Layout>
  )
}

export default families_individual
