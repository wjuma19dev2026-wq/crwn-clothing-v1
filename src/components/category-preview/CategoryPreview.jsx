import styles from './CategoryPreview.module.scss'
import clsx from 'clsx'
import { Fragment } from 'react'
import { ProductCard } from '../'
import { Link } from 'react-router-dom'

export const CategoryPreview = ({ title, products }) => {
  return (
    <Fragment>
      <h3 className={clsx(styles.categoryTitle)}>
        <Link to={`/shop/${title}`.toLowerCase()}>
          {' '}
          {title}
        </Link>
      </h3>
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
