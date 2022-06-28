import Button from "./atoms/Button";
import Card from "./atoms/Card";
import TextContainer from "./atoms/TextContainer";
import TitlewithNumber from "./TitlewithNumber";
const Step3 = ({ hash, newBlocksArray, onReset }) => {
  return (
    <Card>
      <TitlewithNumber
        title="Guarde su Hash y cadena de bloques en un lugar seguro"
        step="3"
      />
      <TextContainer>
        <p>Blocks ordenados 🏷️</p>
        {newBlocksArray.map((block, idx) => (
          <p className="code-font" key={idx}>
            {block}
          </p>
        ))}
      </TextContainer>

      <TextContainer>
        <p>Hash generado 🔒</p>
        <p className="code-font">{hash}</p>
      </TextContainer>

      <Button type="button" title="Reiniciar proceso" callback={onReset} />
    </Card>
  );
};

export default Step3;
