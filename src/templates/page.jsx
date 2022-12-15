import * as React from "react"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import '../scss/main.scss'

const TemplatePage = ({ data }) => {
  const { contentfulPage } = data
  const { title, message, image } = contentfulPage

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

export default TemplatePage


export const TemplatePageQuery = graphql`
  query ($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      message {
        raw
      }
      image {
        file {
          url
        }
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.contentfulPage.title}</title>
