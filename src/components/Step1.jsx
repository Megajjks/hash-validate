import axios from "axios";
import Input from "./atoms/Input";
import Button from "./atoms/Button";
import Card from "./atoms/Card";
import TextContainer from "./atoms/TextContainer";
import TitlewithNumber from "./TitlewithNumber";
import { URL_BASE } from "../utils/api";
const Step1 = ({ email, token, setEmail, setToken, setStepper }) => {
  const onChangeHandler = (e) => setEmail(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${URL_BASE}/token?email=${email}`);
      setToken(res.data.token);
      setStepper([true, true, false]);
    } catch (err) {
      console.log(err);
    }
  };

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
      <form onSubmit={onSubmitHandler}>
        <Input
          label="Email"
          placeholder="example@email.com"
          type="email"
          name="email"
          value={email}
          isDisabled={token ? true : false}
          callback={(e) => onChangeHandler(e)}
          isRequired={true}
        />
        {!token && <Button type="submit" title="Obtener cadena de bloques" />}
      </form>
    </Card>
  );
};

export default Step1;
