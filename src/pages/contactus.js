import React from "react"
import Layout from "../components/Layout"
import ContactBanner from "../components/subComponents/ContactUS/ContactBanner"
import ContactUsForm from "../components/subComponents/ContactUS/ContactUsForm"

function contactus() {
  return (
    <Layout>
      <ContactBanner />
      <ContactUsForm />
    </Layout>
  )
}

export default contactus
