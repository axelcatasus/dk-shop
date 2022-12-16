import * as React from "react"
import { Link } from 'gatsby'
import ImageModal from "./image-modal/ImageModal"
import { 
  gridItem, 
  listItem, 
  imageAndTextContainer, 
  imageContainer, 
  image, 
  imageButton, 
  textContainer, 
  priceAndBuyContainer, 
  price, 
  buyButton 
} from './product-list-item.module.scss'

const ProductListItem = ({ product, currentView }) => {
  const currentViewClass = currentView === 'grid' ? gridItem : listItem
  const [imageViewUrl, setImageViewUrl] = React.useState(null)

  return (
    <article key={product.node.id} className={currentViewClass}>
      <section className={imageAndTextContainer}>
        <section className={imageContainer}>
          <img 
            src={product.node.image.file.url}
            alt={product.node.slug}
            className={image}
            />
          <button
            className={imageButton}
            onClick={() => setImageViewUrl(product.node.image.file.url)}
            aria-label="View Image"
            >
            View Image
          </button>
        </section>
        <section className={textContainer}>
          <Link to={product.node.slug}>
            <h3>{product.node.title}</h3>
          </Link>
          <p>{product.node.description}</p>
        </section>
      </section>
      <section className={priceAndBuyContainer}>
        <p className={price}>{product.node.price} 🍌</p>
        <button className={buyButton}>Add to minecart!</button>
      </section>
      {imageViewUrl && <ImageModal url={imageViewUrl} setImageViewUrl={setImageViewUrl} />}
    </article>
  )
}

export default ProductListItem

