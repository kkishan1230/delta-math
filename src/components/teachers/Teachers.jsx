import React from "react"
import Banner from "./Banner"
import CreateAccount from "./CreateAccount"
import PriceChart from "./PriceChart"
import QuickVideo from "./QuickVideo"
import TeacherCaraousel from "./TeacherCaraousel"

function Teachers() {
  return (
    <div>
      <Banner />
      <CreateAccount />
      <TeacherCaraousel />
      <PriceChart />
      <QuickVideo />
    </div>
  )
}

export default Teachers
