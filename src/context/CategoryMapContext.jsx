import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../services'

export const CategoryMapContext = createContext({
  categoryMap: {},
})

export const CategoryMapProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({})

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoryMap(categoryMap)
    }
    getCategoryMap()
  }, [])

  const value = {
    categoryMap,
    setCategoryMap,
  }

  return (
    <CategoryMapContext.Provider value={value}>
      {children}
    </CategoryMapContext.Provider>
  )
}
