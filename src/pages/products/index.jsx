import * as React from "react"
import { graphql } from 'gatsby'
import ProductList from '../../components/ProductList'
import ChangeView from '../../components/ChangeView'
import Header from '../../components/Header'
import { topSection } from './products.module.scss'

const ProductsPage = ({ data }) => {
  const [currentView, setCurrentView] = React.useState('grid')

  return (
  <>
    <Header />
    <main>
      <section className={topSection}>
        <h1>Products</h1>
        <ChangeView setCurrentView={setCurrentView} />
      </section>
      <ProductList products={data} currentView={currentView} />
    </main>
  </>
  )
}

export default ProductsPage

export const ProductsPageQuery = graphql`
  query ProductsPageQuery {
    allContentfulProduct(sort: {price: ASC}) {
      edges {
        node {
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
    }
  }
`

export const Head = () => <title>DK Shop</title>
