const FormInput = ({ label, id, ...otherProps }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...otherProps}
      />
    </>
  )
}

export default FormInput
