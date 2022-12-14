import * as React from "react"
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Header from '../components/Header'

const AboutPage = ({data}) => {
  const { allContentfulPage } = data
  const { message, title } = allContentfulPage.nodes[0]

  return (
    <>
    <Header />
    <main>
      <h1>{title}</h1>
      <div>
        {renderRichText(message)}
      </div>
    </main>
    </>
  )
}

export default AboutPage

export const AboutPageQuery = graphql`
query AboutPageQuery {
  allContentfulPage(filter: {pathName: {eq: "/privacy"}}) {
    nodes {
      message {
        raw
      }
      id
      title
    }
  }
}
`


export const Head = () => <title>About</title>
