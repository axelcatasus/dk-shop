import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Header from '../components/Header'

const PageTemplate = ({ data }) => {
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

export const PageTemplateQuery = graphql`
  query PageTemplateQuery($pathName: String!) {
    allContentfulPage(filter: {pathName: {eq: $pathName}}) {
      nodes {
        title
        message {
          raw
        }
        id
      }
    }
  }
`

export default PageTemplate