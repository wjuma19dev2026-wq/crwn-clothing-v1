import { Fragment } from 'react'
import { ProductCard } from '../'

export const CategoryPreview = ({ title, products }) => {
  return (
    <Fragment>
      <h3 className="text-capitalize">{title}</h3>
      <div className="row">
        {products.map(product => (
          <div
            key={product.id}
            className="col-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}
