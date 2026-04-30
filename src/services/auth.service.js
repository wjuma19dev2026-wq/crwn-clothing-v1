import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  db,
  doc,
  setDoc,
  getDoc,
  auth,
  AuthError,
} from '../utils'

/**
 * Login de usuario con correo y password
 * @param  {string} email
 * @param  {string} password
 * @return {Promise<import('firebase/auth').UserCredential>} Promise que resuelve un UserCredential
 */
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    return userCredential
  } catch (err) {
    throw new AuthError(err)
  }
}

const onAuthStateChangedSvs = fn =>
  onAuthStateChanged(auth, fn)

const signOutSvs = async () => auth.signOut()

const signInWithGooglePopupSvs = async () => {
  try {
    return await signInWithGooglePopup()
  } catch (err) {
    throw new AuthError(err)
  }
}

const signInWithGoogleRedirectSvs = async () => {
  return await signInWithGoogleRedirect()
}

const createUserDocumentFromAuth = async (
  userAuth,
  aditionalInformation = {},
) => {
  if (!userAuth) return

  try {
    const {
      uid,
      email,
      displayName,
      photoURL,
      emailVerified,
    } = userAuth
    const userDocRef = doc(db, 'users', uid)

    // Aqui lanza error Missing or insufficient permissions.
    // Firestore rules false
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
      await setDoc(userDocRef, {
        email,
        displayName,
        photoURL,
        emailVerified,
        ...aditionalInformation,
      })
    }

    return userDocRef
  } catch (err) {
    throw new AuthError(err)
  }
}

/**
 * Crear un usuario con correo y password
 * @param  {string} email       Email valido
 * @param  {string} password    Password min 6
 * @return {Promise<import('firebase/auth').UserCredential>} Promise que resuelve un UserCredential
 */
const createAuthWithEmailAndPassword = async (
  email,
  password,
) => {
  try {
    // Return an userCredential
    return await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
  } catch (err) {
    throw new AuthError(err)
  }
}

export {
  onAuthStateChangedSvs,
  signInWithGooglePopupSvs,
  createUserDocumentFromAuth,
  signInWithGoogleRedirectSvs,
  createAuthWithEmailAndPassword,
  loginUser,
  signOutSvs,
}
