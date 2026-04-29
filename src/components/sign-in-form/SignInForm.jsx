// @ts-check

import styles from './SignInForm.module.scss'
import { useState, useContext } from 'react'
import FormInput from '../../components/form-input'
import Button from '../../components/button'

import {
  signInWithGooglePopupSvs,
  createUserDocumentFromAuth,
  loginUser,
} from '../../services'
import { UserContext } from '../../context'
import { AuthError } from '../../utils'

/**
 * Objeto con valores iniciales del Formulario
 * @typedef {Object} FormValues
 * @property {string} email
 * @property {string} password
 */

/** @type {FormValues}  */
const FORM_INITIAL_VALUES = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formValues, setFormValues] = useState(
    FORM_INITIAL_VALUES,
  )

  const { setCurrentUser } = useContext(UserContext)

  const { email, password } = formValues

  const SignInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopupSvs()
      const userDocRef = await createUserDocumentFromAuth(
        user,
        {},
      )
      // TODO: setCurrentUser
    } catch (/** @type {any} */ err) {
      console.log(err.status)
      console.log(err.code)
      console.log(err.statusCode)
      // TODO: Toast
      // Show Toast Alert With Firebase Authentication Errors Here!
    }
  }

  /**
   * Handles input change events and updates the form state.
   * @param {import("react").ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} e - The change event object.
   */
  function handlerChange(e) {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  /**
   * Form Handler Submit Event
   * @param  {import('react').FormEvent<HTMLFormElement> } e  Event
   * @return {Promise<import("firebase/auth").UserCredential | null | undefined>} Does not return anything
   */
  async function handlerSubmit(e) {
    e.preventDefault()

    try {
      const isFormValid =
        email.trim() !== '' && password.trim() !== ''
      if (!isFormValid) {
        alert(
          'Todos los campos son obligatorios para iniciar sesion.',
        )
        return null
      }

      const { user } = await loginUser(email, password)
      setCurrentUser(user)
      console.log(user)
    } catch (/** @type {any} */ err) {
      alert(`${err.status}: `.toUpperCase() + err.code)
    }
  }

  return (
    <form onSubmit={handlerSubmit}>
      <fieldset>
        <legend className="mb-5">
          <h2 className={styles.legend__heading}>
            Already have an account?
          </h2>
          <p className={styles.legend__text}>
            Sign in with your email and password.
          </p>
        </legend>

        <FormInput
          label="Email"
          name="email"
          id="email"
          type="email"
          className="form-control"
          value={email}
          onChange={handlerChange}
        />

        <FormInput
          label="Password"
          name="password"
          id="password"
          type="password"
          className="form-control"
          value={password}
          onChange={handlerChange}
        />

        <div className="d-flex gap-2">
          <Button
            fn={() => null}
            buttonClass="dark"
            buttonType="submit">
            Sign in
            <i className="bi bi-box-arrow-in-right text-light mx-2"></i>
          </Button>
          <div className="btn-group">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary">
                <i className="bi bi-google text-light"></i>
              </button>
            </div>
            <Button
              fn={SignInWithGoogle}
              buttonClass="outline-primary"
              buttonType="button">
              Google Sign In
            </Button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default SignInForm
