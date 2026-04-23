import styles from './Login.module.css'

import {
  createUserDocumentFromAuth,
  signInWithGooglePopupSvs,
} from '../../services'
import { useState } from 'react'

import Toast from '../../shared/toast'

const Login = () => {
  const [error, setError] = useState(null)

  const signInWithGoogle = () => {
    signInWithGooglePopupSvs()
      .then(response => {
        return createUserDocumentFromAuth(response.user)
      })
      .then(userDocRef => console.log(userDocRef))
      .catch(err => {
        setError(err)
        console.log('statusCode: ', err.statusCode)
        console.log('status: ', err.status)
        console.log('message: ', err.message)
        console.log('stack: ', err.stack)
      })
  }

  const onCloseToast = () => {
    setError(null)
    console.clear()
  }

  return (
    <main className={styles.container}>
      <div className="btn-group">
        <button
          className="btn btn-danger btn-sm"
          onClick={signInWithGoogle}>
          Google Sign in with popup
        </button>
      </div>

      {error ? (
        <Toast
          error={error}
          closeToast={onCloseToast}
        />
      ) : null}
    </main>
  )
}

export default Login
