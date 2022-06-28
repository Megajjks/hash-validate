import { useState } from "react";
import axios from "axios";
import Input from "./atoms/Input";
import Button from "./atoms/Button";
import Card from "./atoms/Card";
import TextContainer from "./atoms/TextContainer";
import TitlewithNumber from "./TitlewithNumber";
import Loader from "./atoms/Loader";
import { URL_BASE } from "../utils/api";
import { toastError } from "../utils/toast.utils";
const Step1 = ({ email, token, setEmail, setToken, setStepper, onReset }) => {
  const [status, setStatus] = useState({
    isLoading: false,
    error: "",
  });

  const onChangeHandler = (e) => setEmail(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setStatus({ error: "", isLoading: true });
    try {
      const res = await axios.get(`${URL_BASE}/token?email=${email}`);
      setToken(res.data.token);
      setStatus((prevState) => ({ ...prevState, isLoading: false }));
      setStepper([true, true, false]);
    } catch (err) {
      onReset();
      toastError("Problemas con el servidor");
      setStatus({ error: "Problemas con el servidor", isLoading: false });
      console.error(err);
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
        {!status.isLoading ? (
          !token && <Button type="submit" title="Obtener cadena de bloques" />
        ) : (
          <Loader />
        )}
      </form>
    </Card>
  );
};

export default Step1;
