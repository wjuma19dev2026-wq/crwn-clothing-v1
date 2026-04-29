// @ts-check

import styles from './SingUpForm.module.scss'
import { useState } from 'react'
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../services'
import Button from '../button'
import FormInput from '../form-input/FormInput'

const initialFieldsValue = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SingUpForm = () => {
  const [formFields, setFormFields] = useState(
    initialFieldsValue,
  )

  const { displayName, email, password, confirmPassword } =
    formFields

  const resetFormData = () => {
    setFormFields(initialFieldsValue)
  }

  /**
   * Handles input change events and updates the form state.
   * @param {import("react").ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} event - The change event object.
   */
  const onHandlerChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  /**
   * Handles the form submission event.
   * @param  {import("react").FormEvent<HTMLFormElement>} event
   * @return {void} No regresa nada
   */
  const onHandlerSubmit = event => {
    event.preventDefault()

    // TODO: Input Validation Here!.

    const isInvalid = Object.values(formFields).some(
      val => val.trim() === '',
    )

    if (isInvalid) {
      alert('Todos los campos son obligatorios')
      return
    }

    createAuthWithEmailAndPassword(email, password)
      .then(({ user }) => {
        resetFormData()
        createUserDocumentFromAuth(user, { displayName })
          .then(console.log)
          .catch(console.log)
      })
      .catch(error => {
        alert(error.message)
        console.log(error.message)
      })
  }

  return (
    <form
      onSubmit={onHandlerSubmit}
      noValidate>
      <fieldset>
        <legend className="mb-5">
          <h2 className={styles.legend__heading}>
            Don't have an account?
          </h2>
          <p className={styles.legend__text}>
            Sign up with your email and password.
          </p>
        </legend>

        <FormInput
          label="Display Name"
          type="text"
          className="form-control"
          name="displayName"
          id="displayName"
          value={displayName}
          onChange={onHandlerChange}
        />

        <FormInput
          label="Email"
          type="email"
          className="form-control"
          name="email"
          id="email"
          value={email}
          onChange={onHandlerChange}
        />

        <FormInput
          label="Password"
          type="password"
          className="form-control"
          name="password"
          id="password"
          value={password}
          onChange={onHandlerChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          className="form-control"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onHandlerChange}
        />

        <Button
          buttonType="submit"
          buttonClass="outline-dark btn-lg">
          Sign up
        </Button>
      </fieldset>
    </form>
  )
}

export default SingUpForm
