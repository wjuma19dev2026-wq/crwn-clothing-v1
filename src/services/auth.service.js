import { createUserWithEmailAndPassword } from 'firebase/auth'
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  db,
  doc,
  setDoc,
  getDoc,
  AppError,
  auth,
} from '../utils'

const signInWithGooglePopupSvs = async () => {
  try {
    const response = await signInWithGooglePopup()
    return response
  } catch (err) {
    throw new Error('An error ocurred: ', err)
  }
}

const signInWithGoogleRedirectSvs = () => {
  return signInWithGoogleRedirect()
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
      console.log(
        `Usuario ${displayName ? displayName : aditionalInformation.displayName} registrado en Firestore.`,
      )
    } else {
      const authError = new Error(
        `El usuario ${displayName ? displayName : aditionalInformation.displayName} ya existe en Firestore.`,
      )
      authError.statusCode = 404
      throw authError
    }

    return userDocRef
  } catch (err) {
    const appError = new AppError(
      err.message,
      err.statusCode ? err.statusCode : 500,
    )
    throw appError
  }
}

/**
 * Crear un usuario con correo y password
 * @param  {string} displayName Nombre del usuario
 * @param  {string} email       Email valido
 * @param  {string} password    Password min 6
 * @return {Promise<import('firebase/auth').UserCredential>} Promise que resuelve un UserCredential
 */
const createAuthWithEmailAndPassword = async (
  displayName,
  email,
  password,
) => {
  try {
    return await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
  } catch (err) {
    if (err.code === 'auth/operation-not-allowed') {
      const authError = new AppError(
        '💥 El registro por email no está habilitado.',
        500,
      )
      throw authError
    } else if (err.code === `auth/email-already-in-use`) {
      const authError = new AppError(
        '💥 Este correo ya está registrado.',
        500,
      )
      throw authError
    }
    throw new Error(err)
  }
}

export {
  signInWithGooglePopupSvs,
  createUserDocumentFromAuth,
  signInWithGoogleRedirectSvs,
  createAuthWithEmailAndPassword,
}
