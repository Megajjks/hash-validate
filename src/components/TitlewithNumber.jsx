import NumberCircle from "./atoms/NumberCircle";
import "./TitlewithNumber.style.css";
const TitlewithNumber = ({ title, step }) => (
  <div className="title-step">
    <NumberCircle number={step} />
    <h2>{title}</h2>
  </div>
);
 
export default TitlewithNumber;