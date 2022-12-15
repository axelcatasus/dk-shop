import * as React from "react"
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Header from '../components/Header'

const AboutPage = ({data}) => {
  const { allContentfulPage } = data
  const { message, title, image } = allContentfulPage.nodes[0]

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

export default AboutPage

export const AboutPageQuery = graphql`
query AboutPageQuery {
  allContentfulPage(filter: {pathName: {eq: "/about"}}) {
    nodes {
      message {
        raw
      }
      id
      title
      image {
        file {
          url
        }
      }
    }
  }
}
`

export const Head = ({ data }) => <title>{data.allContentfulPage.nodes[0].title}</title>
