import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components'
import { CategoryMapContext } from '../../context'
import styles from './Category.module.scss'

export const Category = () => {
  const { category } = useParams()
  const { categoryMap } = useContext(CategoryMapContext)
  const [products, setProducts] = useState(
    categoryMap[category],
  )

  useEffect(() => {
    setProducts(categoryMap[category])
  }, [category, categoryMap])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className={clsx(styles.categoryTitle)}>
            {category}
          </h1>
        </div>
        {products &&
          products.map(product => (
            <div
              className="col-3"
              key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  )
}
