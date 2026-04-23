import {
  signInWithGooglePopup,
  db,
  doc,
  setDoc,
  getDoc,
  AppError,
} from '../utils'

export const signInWithGooglePopupSvs = async () => {
  try {
    const response = await signInWithGooglePopup()
    return response
  } catch (err) {
    throw new Error('An error ocurred: ', err)
  }
}
export const createUserDocumentFromAuth =
  async userAuth => {
    try {
      const {
        uid,
        accessToken,
        email,
        displayName,
        photoURL,
        emailVerified,
      } = userAuth
      const userDocRef = doc(db, 'users', uid)
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
      }
      return userDocRef
    } catch (err) {
      const appError = new AppError(err.message, 500)
      throw appError
    }
  }
