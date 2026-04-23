import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

const googleAuthProvider = new GoogleAuthProvider()

googleAuthProvider.setCustomParameters({
  prompt: 'select_account',
})

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

/**
 * Signs in the user using a Google provider via a popup window.
 * * @async
 * @function signInWithGooglePopup
 * @returns {Promise<import('firebase/auth').UserCredential>} A promise that resolves with the user's credentials.
 * @throws {FirebaseError} Throws an error if the popup is closed or authentication fails.
 */
const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider)

const signInWithGoogleRedirect = () =>
  setPersistence(auth, browserLocalPersistence).then(() =>
    signInWithRedirect(auth, googleAuthProvider),
  )

export {
  doc,
  setDoc,
  getDoc,
  auth,
  db,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
}
