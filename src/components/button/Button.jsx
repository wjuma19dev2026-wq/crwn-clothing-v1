/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children - Contenido del botón.
 * @property {"button" | "submit" | "reset"} [buttonType] - Tipo de botón HTML (opcional).
 * @property {"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link" | "outline-dark" | "outline-light" | "outline-info"} buttonClass - Clases de Bootstrap.
 * @property {Function} fn Event Click on button
 */

/**
 * Bootstrap Button
 * @type {React.FC<ButtonProps>}
 */
const Button = ({
  children,
  buttonType,
  buttonClass,
  fn,
}) => {
  return (
    <button
      onClick={fn}
      type={buttonType}
      className={`btn btn-${buttonClass}`}>
      {children}
    </button>
  )
}

export default Button
