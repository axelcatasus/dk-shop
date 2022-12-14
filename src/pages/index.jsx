import * as React from "react"
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Header from '../components/Header'
import './main.scss'
import { main, messageContainer } from './index.module.scss'

const IndexPage = ({ data }) => {
  const { allContentfulWelcomeMessage } = data
  const message = allContentfulWelcomeMessage.edges[0].node.message
  return (
    <>
    <Header />
    <main className={main}>
      <h1>DK Shop</h1>
      <div className={messageContainer}>
        {renderRichText(message)}
      </div>
    </main>
    </>
  )
  
}

export default IndexPage

export const IndexPageQuery = graphql`
query ProductsPageQuery {
  allContentfulWelcomeMessage {
    edges {
      node {
        message {
          raw
        }
        id
      }
    }
  }
}
`

export const Head = () => <title>DK Shop</title>
