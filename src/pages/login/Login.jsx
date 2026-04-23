import {
  createUserDocumentFromAuth,
  signInWithGooglePopupSvs,
} from '../../services/authService'
import styles from './Login.module.css'

const Login = () => {
  const signInWithGoogle = () => {
    signInWithGooglePopupSvs()
      .then(response => {
        return createUserDocumentFromAuth(response.user)
      })
      .then(console.log)
      .catch(err => {
        console.log('statusCode: ', err.statusCode)
        console.log('status: ', err.status)
        console.log('message: ', err.message)
        console.log('stack: ', err.stack)
      })
  }

  return (
    <main className={styles.container}>
      <button
        className="btn btn-danger btn-sm"
        onClick={signInWithGoogle}>
        Google Sign in with popup
      </button>
    </main>
  )
}

export default Login
