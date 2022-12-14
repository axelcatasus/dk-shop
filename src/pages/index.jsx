import * as React from "react"
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Header from '../components/Header'
import '../scss/main.scss'
import { main, messageContainer } from './index.module.scss'

const IndexPage = ({ data }) => {
  const { allContentfulPage } = data
  const { title, message } = allContentfulPage.nodes[0]
  return (
    <>
    <Header />
    <main className={main}>
      <h1>{title}</h1>
      <div className={messageContainer}>
        {renderRichText(message)}
      </div>
    </main>
    </>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
query IndexPageQuery {
  allContentfulPage(filter: {pathName: {eq: "/"}}) {
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

export const Head = () => <title>DK Shop</title>
