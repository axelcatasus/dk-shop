import * as React from "react"
import ProductListItem from './product-list-item/ProductListItem'
import { list, grid } from './product-list.module.scss'

const ProductList = ({ products, currentView }) => {


  const currentViewClass = currentView === 'grid' ? grid : list;

  return (
    <section className={currentViewClass}>
      {products.map((product) =>
        <ProductListItem key={product.node.id} product={product} currentView={currentView} />
      )}
    </section>
  )
}

export default ProductList

