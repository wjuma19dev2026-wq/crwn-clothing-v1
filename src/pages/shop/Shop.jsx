import { Route, Routes } from 'react-router-dom'
import { CategoriesReview, Category } from '../'

const Shop = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<CategoriesReview />}
      />
      <Route
        path="/:category"
        element={<Category />}
      />
    </Routes>
  )
}

export default Shop

// <div className="container">

// </div>
