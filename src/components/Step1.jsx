import Input from './atoms/Input'
import Button from "./atoms/Button"
import Card from "./atoms/Card";
import TextContainer from "./atoms/TextContainer";
import TitlewithNumber from "./TitlewithNumber";
const Step1 = () => {
  return (
    <Card>
      <TitlewithNumber
        title="Obtenga su cadena de bloques con su email"
        step="1"
      />
      <TextContainer>
        Introduzca su email para generar una cadena de bloques aleatorias unicas
        🔗
      </TextContainer>
      <Input
        label="Email"
        placeholder="example@email.com"
        name="email"
        isRequired={true}
      />
      <Button type="button" title="enviar" />
    </Card>
  );
}
 
export default Step1;