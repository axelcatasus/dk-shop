import * as React from "react"
import { graphql } from 'gatsby'
import Header from '../../components/header/Header'
import { product, productTitle } from './product.module.scss'


const SingleProductPage = ({ data }) => {
  const { contentfulProduct } = data
  return (
    <>
      <Header />
      <main>
        <article className={product}>
        <h1 className={productTitle}>{contentfulProduct.title}</h1>
          <img 
            src={contentfulProduct.image.file.url} 
            alt={contentfulProduct.title}
          />
          <p>{contentfulProduct.price} 🍌</p>
          <p>{contentfulProduct.description}</p>
        </article>
      </main>
    </>
  )
}

export default SingleProductPage

export const SingleProductPageQuery = graphql`
  query ($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      id
      title
      price
      slug
      description
      image {
        file {
          url
        }
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.contentfulProduct.title}</title>