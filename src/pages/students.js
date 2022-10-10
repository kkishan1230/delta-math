import React from "react"
import Layout from "../components/Layout"
import CreateAccount from "../components/subComponents/StudentsPage/CreateAccount"
import QuickVideo from "../components/subComponents/StudentsPage/QuickVideo"
import StudentsBanner from "../components/subComponents/StudentsPage/StudentsBanner"

function students() {
  return (
    <Layout>
      <StudentsBanner />
      <CreateAccount />
      <QuickVideo />
    </Layout>
  )
}

export default students
