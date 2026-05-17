import { useContext } from 'react'
import { CategoryPreview } from '../../components'
import { CategoryMapContext } from '../../context/CategoryMapContext'
import styles from './CategoriesReview.module.scss'

export const CategoriesReview = () => {
  const { categoryMap } = useContext(CategoryMapContext)

  return (
    <main className="container">
      {Object.keys(categoryMap).map((title, i) => {
        const products = categoryMap[title]
        return (
          <CategoryPreview
            key={i}
            title={title}
            products={products}
          />
        )
      })}
    </main>
  )
}
