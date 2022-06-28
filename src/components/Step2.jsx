import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./atoms/Button";
import Card from "./atoms/Card";
import TextContainer from "./atoms/TextContainer";
import TitlewithNumber from "./TitlewithNumber";
import Loader from "./atoms/Loader";
import { URL_BASE } from "../utils/api";
import { toastError } from "../utils/toast.utils";
const Step2 = ({
  token,
  blocksArray,
  newBlocksArray,
  setBlocksArray,
  setNewBlocksArray,
  setHash,
  setStepper,
  onReset,
}) => {
  const [status, setStatus] = useState({
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    getBlocks();
  }, []);

  useEffect(() => {
    if (
      newBlocksArray.length > 0 &&
      newBlocksArray.length == blocksArray.length
    ) {
      setHash(newBlocksArray.reduce((chain, block) => chain + block));
      setStatus((prevState) => ({ ...prevState, isLoading: false }));
      setStepper([true, true, true]);
    }
  }, [newBlocksArray]);

  const getBlocks = async () => {
    try {
      const res = await axios.get(`${URL_BASE}/blocks?token=${token}`);
      setBlocksArray(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getHash = async () => {
    setStatus({ error: "", isLoading: true });
    let BlocksArraySort = [blocksArray[0]];
    let temporalBlocksList = blocksArray.slice(1);

    const newBlocksList = blocksArray.map((blockLeve1, numberIteration) => {
      blocksArray.map(async (blockLeve2) => {
        try {
          const res = await axios.post(`${URL_BASE}/check?token=${token}`, {
            blocks: [blockLeve1, blockLeve2],
          });
          if (res.data.message) {
            BlocksArraySort = [...blocksArray, blockLeve2];
            setNewBlocksArray((prevState) => [...prevState, blockLeve2]);
            return blockLeve2;
          }
        } catch (err) {
          if (!err.response.status === 403) {
            toastError("Problemas con el servidor");
            setStatus({ error: "Problemas con el servidor", isLoading: false });
          }
        }
      });

      if (numberIteration === 0) {
        setNewBlocksArray((prevState) => [...prevState, blockLeve1]);
      }
    });

    //Solucion para reducir las peticiones
    /* blocksArray.forEach(async (block) => {
      for (let index = 0; index < temporalBlocksList.length; index++) {
        try {
          console.log("index", index);
          console.log("Blockfirst", BlocksArraySort.slice(-1));
          console.log("BlockNext", temporalBlocksList[index]);
          const res = await axios.post(`${URL_BASE}/check?token=${token}`, {
            blocks: [
              BlocksArraySort[BlocksArraySort.length - 1],
              temporalBlocksList[index],
            ],
          });
          if (res.data.message) {
            BlocksArraySort.push(temporalBlocksList[index]);
            const newTemporalBlocksList = temporalBlocksList.filter(
              (hash) => hash !== temporalBlocksList[index]
            );
            temporalBlocksList = newTemporalBlocksList;
            //console.log("Blockfirst", BlocksArraySort.slice(-1));
            //console.log("BlockNext", temporalBlocksList[index]);
            break;
          }
        } catch (err) {
          console.log(err);
        }
      }
      console.table(temporalBlocksList);
      console.table(BlocksArraySort);
    }); */
  };

  return (
    <Card>
      <TitlewithNumber title="Obtenga su hash" step="2" />
      {blocksArray.length > 0 && (
        <TextContainer>
          <p>Blocks generados aleatoriamente 🔀</p>
          {blocksArray.map((block, idx) => (
            <p className="code-font" key={idx}>
              {block}
            </p>
          ))}
        </TextContainer>
      )}
      {!status.isLoading ? (
        newBlocksArray.length <= 0 && (
          <Button type="button" title="obtener hash" callback={getHash} />
        )
      ) : (
        <Loader />
      )}
    </Card>
  );
};

export default Step2;
