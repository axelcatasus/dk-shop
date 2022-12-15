import * as React from "react"
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Header from '../components/Header'
import '../scss/main.scss'

const IndexPage = ({ data }) => {
  const { allContentfulPage } = data
  const { title, message, image } = allContentfulPage.nodes[0]
  return (
    <>
      <Header />
      <main className="page-main">
        <article className="page-container">
          <section className="message-section">
            <h1 className="page-title">{title}</h1>
            {renderRichText(message)}
          </section>
          <img className="page-image" src={image.file.url} alt={title} />
        </article>
      </main>
    </>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
query IndexPageQuery {
  allContentfulPage(filter: {pathName: {eq: "/"}}) {
    nodes {
      title
      message {
        raw
      }
      image {
        file {
          url
        }
      }
      id
    }
  }
}
`

export const Head = ({ data }) => <title>{data.allContentfulPage.nodes[0].title}</title>
