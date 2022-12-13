import * as React from "react"
import { Link, graphql } from 'gatsby'


const SingleProductPage = ({ data }) => {
  const { contentfulProduct } = data
  return (
    <main>
      <Link to="/products">Back to products</Link>
      <article>
        <img 
          src={contentfulProduct.image.file.url} 
          alt={contentfulProduct.title}
        />
        <h1>{contentfulProduct.title}</h1>
        <p>{contentfulProduct.price}</p>
        <p>{contentfulProduct.description}</p>
      </article>
    </main>
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