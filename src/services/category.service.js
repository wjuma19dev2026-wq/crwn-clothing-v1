import {
  collection,
  getDocs,
  query,
} from 'firebase/firestore'
import { AppError, db } from '../utils'

const getCategoriesAndDocuments = async () => {
  try {
    const colRef = collection(db, 'categories')
    const q = query(colRef)
    const querySnap = await getDocs(q)
    const categoryMap = querySnap.docs.reduce(
      (acc, docSnap) => {
        const { title, items } = docSnap.data()

        if (title) {
          acc[title.toLowerCase()] = items
        }
        return acc
      },
      {},
    )
    return categoryMap
  } catch (err) {
    const appError = new AppError(err.message, 500)
    throw appError
  }
}

export { getCategoriesAndDocuments }
