import "./Button.style.css"
const Button = ({ type, title, callback }) => (
  <button className="general-button" type={type} onClick={callback}>
    {title}
  </button>
);
 
export default Button;