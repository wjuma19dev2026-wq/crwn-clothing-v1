/**
 * Listado de errores comunes de Firebase (Auth & Firestore)
 * Útil para mapear respuestas técnicas a mensajes de usuario.
 */
export const FIREBASE_ERROR_MAP = {
  // --- AUTHENTICATION ERRORS ---
  'auth/invalid-credential': {
    message: 'Correo o contraseña incorrectos.',
    status: 401,
  },
  'auth/user-not-found': {
    message:
      'No existe una cuenta con este correo electrónico.',
    status: 404,
  },
  'auth/wrong-password': {
    message: 'La contraseña es incorrecta.',
    status: 401,
  },
  'auth/email-already-in-use': {
    message:
      'Este correo ya está registrado en otra cuenta.',
    status: 409,
  },
  'auth/weak-password': {
    message:
      'La contraseña debe tener al menos 6 caracteres.',
    status: 400,
  },
  'auth/invalid-email': {
    message:
      'El formato del correo electrónico no es válido.',
    status: 400,
  },
  'auth/operation-not-allowed': {
    message:
      'El método de inicio de sesión no está habilitado.',
    status: 403,
  },
  'auth/too-many-requests': {
    message: 'Demasiados intentos. Inténtalo más tarde.',
    status: 429,
  },
  'auth/network-request-failed': {
    message: 'Error de red. Revisa tu conexión a internet.',
    status: 503,
  },
  'auth/user-disabled': {
    message: 'Esta cuenta ha sido deshabilitada.',
    status: 403,
  },

  // --- FIRESTORE ERRORS ---
  'permission-denied': {
    message:
      'No tienes permisos suficientes para realizar esta acción.',
    status: 403,
  },
  unavailable: {
    message:
      'El servicio de base de datos no está disponible temporalmente.',
    status: 503,
  },
  'not-found': {
    message: 'El documento solicitado no existe.',
    status: 404,
  },
  'resource-exhausted': {
    message: 'Se ha excedido la cuota de uso del servidor.',
    status: 429,
  },
  'deadline-exceeded': {
    message:
      'La operación tomó demasiado tiempo. Reintenta.',
    status: 504,
  },
}
