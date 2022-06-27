import "./Input.style.css"
const Input = ({
  label,
  id,
  type,
  name,
  value,
  placeholder,
  pattern,
  isRequired,
  isDisabled,
  callback,
}) => (
  <div className="input-wrapper">
    <label className="input-label">{label}</label>
    <input
      className="input-field"
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      pattern={pattern}
      required={isRequired}
      onChange={callback}
      disabled={isDisabled}
      autocomplete
    />
  </div>
);
 
export default Input;