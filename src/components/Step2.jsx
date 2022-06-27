import { useEffect } from "react";
import axios from "axios";
import Button from "./atoms/Button";
import Card from "./atoms/Card";
import TextContainer from "./atoms/TextContainer";
import TitlewithNumber from "./TitlewithNumber";
import { URL_BASE } from "../utils/api";
const Step2 = ({ token, blocksArray, setBlocksArray, setStepper }) => {
  useEffect(() => {
    getBlocks();
  }, []);

  const getBlocks = async () => {
    try {
      const res = await axios.get(`${URL_BASE}/blocks?token=${token}`);
      setBlocksArray(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      <TitlewithNumber title="Obtenga su hash" step="2" />
      {blocksArray.length > 0 && (
        <TextContainer>
          <p>Blocks generados aleatoriamente</p>
          {blocksArray.map((block, idx) => (
            <p className="code-font" key={idx}>
              {block}
            </p>
          ))}
        </TextContainer>
      )}
      <Button type="button" title="obtener hash" />
    </Card>
  );
};

export default Step2;
