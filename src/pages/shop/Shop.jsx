import { useContext } from 'react'
import { CategoryMapContext } from '../../context/CategoryMapContext'
import { CategoryPreview } from '../../components'

const Shop = () => {
  const { categoryMap } = useContext(CategoryMapContext)

  return (
    <div className="container">
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
    </div>
  )
}

export default Shop
