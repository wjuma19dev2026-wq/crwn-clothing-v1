import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  db,
  doc,
  setDoc,
  getDoc,
  AppError,
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
const createUserDocumentFromAuth = async userAuth => {
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
      })
      console.log(
        `Usuario ${displayName} registrado en Firestore.`,
      )
    } else {
      const authError = new Error(
        `El usuario ${displayName} ya existe en Firestore.`,
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

export {
  signInWithGooglePopupSvs,
  createUserDocumentFromAuth,
  signInWithGoogleRedirectSvs,
}
