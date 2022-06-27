import { useEffect } from "react";
import axios from "axios";
import Button from "./atoms/Button";
import Card from "./atoms/Card";
import TextContainer from "./atoms/TextContainer";
import TitlewithNumber from "./TitlewithNumber";
import { URL_BASE } from "../utils/api";
const Step2 = ({
  token,
  blocksArray,
  setBlocksArray,
  setNewBlocksArray,
  setStepper,
}) => {
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

  const getHash = async () => {
    let BlocksArraySort = [blocksArray[0]];
    let temporalBlocksList = blocksArray.slice(1);

    blocksArray.forEach(async (block) => {
      for (let index = 0; index < temporalBlocksList.length; index++) {
        try {
          const res = await axios.post(`${URL_BASE}/check?token=${token}`, {
            blocks: [BlocksArraySort.slice(-1), temporalBlocksList[index]],
          });
          if (res.data.message) {
            BlocksArraySort.push(temporalBlocksList[index]);
            const newTemporalBlocksList = temporalBlocksList.filter(
              (hash) => hash !== temporalBlocksList[index]
            );
            temporalBlocksList = newTemporalBlocksList;
            console.log(res.data.message);
            break;
          }
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    });

    console.log("temporalBlocksList", temporalBlocksList);
    console.log("BlocksArraySort", BlocksArraySort);
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
      <Button type="button" title="obtener hash" callback={getHash} />
    </Card>
  );
};

export default Step2;
