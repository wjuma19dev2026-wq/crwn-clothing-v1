import { FIREBASE_ERROR_MAP } from './firebase.errors'

class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.status = `${this.statusCode}`.startsWith('4')
      ? 'fail'
      : 'error'

    // Captura el stack trace sin incluir el constructor de esta clase
    Error.captureStackTrace(this, this.constructor)
  }
}

class AuthError extends Error {
  constructor(err) {
    super(err.message)
    this.code = FIREBASE_ERROR_MAP[err.code].message
    this.statusCode = FIREBASE_ERROR_MAP[err.code].status
    this.status = `${this.statusCode}`.startsWith('4')
      ? 'fail'
      : 'error'

    // Captura el stack trace sin incluir el constructor de esta clase
    Error.captureStackTrace(this, this.constructor)
  }
}

export { AppError, AuthError }
