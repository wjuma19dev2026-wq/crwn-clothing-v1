// @ts-check

import { Fragment, useState } from 'react'
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

    createAuthWithEmailAndPassword(
      displayName,
      email,
      password,
    )
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
    <Fragment>
      <div
        className="col-8 offset-2 col-md-4 offset-md-8
       my-5">
        <form
          onSubmit={onHandlerSubmit}
          noValidate>
          <fieldset>
            <legend className="mb-5">
              Sign up with your email and password.
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

            <div className="mt-5">
              <Button
                buttonType="submit"
                buttonClass="outline-dark">
                Sign up
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </Fragment>
  )
}

export default SingUpForm
