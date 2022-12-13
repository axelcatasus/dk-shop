import * as React from "react"
import { Link } from 'gatsby'
import ImageModal from "./ImageModal"
import './product-list-item.scss'

const ProductListItem = ({ product, currentView }) => {
  const currentViewClass = currentView === 'grid' ? 'grid-item' : 'list-item'
  const [imageViewUrl, setImageViewUrl] = React.useState(null)

  return (
    <article key={product.node.id} className={currentViewClass}>
      <section className="image-container">
        <img 
          src={product.node.image.file.url}
          alt={product.node.slug}
          className="image"
        />
        <button
          className="image-button"
          onClick={() => setImageViewUrl(product.node.image.file.url)}
          aria-label="View Image"
        >
          View Image
        </button>
      </section>
      <section className="text-container">
        <Link to={product.node.slug}>
          <h3>{product.node.title}</h3>
        </Link>
        <p>{product.node.description}</p>
      </section>
      <p>Price: {product.node.price} 🍌</p>
      {imageViewUrl && <ImageModal url={imageViewUrl} setImageViewUrl={setImageViewUrl} />}
    </article>
  )
}

export default ProductListItem
