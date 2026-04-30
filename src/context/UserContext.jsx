import { createContext, useEffect, useState } from 'react'
import { onAuthStateChangedSvs } from '../services'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
  /** @type {[CredentialUser | null, React.Dispatch<React.SetStateAction<CredentialUser | null>>]} */
  const [currentUser, setCurrentUser] = useState(
    /** @type {import('firebase/auth').User | null} */ (
      null
    ),
  )

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedSvs(user => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
