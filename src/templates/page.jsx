import * as React from "react"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { graphql } from 'gatsby'
import Header from '../components/header/Header'
import { pageMain, pageContainer, messageSection, pageTitle, pageImage } from './page.module.scss'

const TemplatePage = ({ data }) => {
  const { contentfulPage } = data
  const { title, message, image } = contentfulPage

  return (
    <>
      <Header />
      <main className={pageMain}>
        <article className={pageContainer}>
          <section className={messageSection}>
            <h1 className={pageTitle}>{title}</h1>
            {renderRichText(message)}
          </section>
          <img className={pageImage} src={image.file.url} alt={title} />
        </article>
      </main>
    </>
  )
}

export default TemplatePage
export const Head = ({ data }) => <title>{data.contentfulPage.title}</title>


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
