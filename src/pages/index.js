import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import CTAButton from "../components/Utility/CTAButton/CTAButton"

const IndexPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  return (
    <Layout>
      <Hero image={image} type="home">
        <BannerText
          title="Villa Du Lac by Omroom"
          info="Some extra copy goes here and looks pretty"
        >
          <CTAButton path="#" text="Book a Retreat Now" />
        </BannerText>
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "grounds1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
