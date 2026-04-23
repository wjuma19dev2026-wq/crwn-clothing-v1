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

export { AppError }
