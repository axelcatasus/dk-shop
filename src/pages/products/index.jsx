import * as React from "react"
import { graphql } from 'gatsby'
import ProductList from '../../components/ProductList'
import ChangeView from '../../components/ChangeView'
import CategorySelect from "../../components/CategorySelect"
import Header from '../../components/Header'
import { topSection } from './products.module.scss'

const ProductsPage = ({ data }) => {
  const [currentView, setCurrentView] = React.useState('grid')
  const [category, setCategory] = React.useState('all')

  const products = data.allContentfulProduct.edges

  const filteredProducts = products.filter(product => {
    if (category === 'all') {
      return true
    } else {
      return product.node.category.includes(category)
    }
  })
  

  return (
  <>
    <Header />
    <main>
      <section className={topSection}>
        <h1>Products</h1>
        <CategorySelect setCategory={setCategory} />
        <ChangeView setCurrentView={setCurrentView} />
      </section>
      <ProductList products={filteredProducts} currentView={currentView} />
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
          category
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
