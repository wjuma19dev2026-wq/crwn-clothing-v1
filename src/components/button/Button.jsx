const Button = ({ children, buttonType, buttonClass }) => {
  return (
    <button
      type={buttonType}
      className={`btn btn-${buttonClass}`}>
      {children}
    </button>
  )
}

export default Button
