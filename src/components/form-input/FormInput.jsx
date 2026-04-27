import './FormInput.scss'
const FormInput = ({ label, id, ...otherProps }) => {
  return (
    <div className="form-group">
      <input
        id={id}
        {...otherProps}
      />
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
        htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default FormInput
