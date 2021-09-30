import { Button } from "@material-ui/core";
import "./styles.css";

const OutDisplay = ({ outcoming, setShowInOut }) => {
  const totalPriceOut = outcoming.reduce((acc, item) => {
    let output = acc + Number(item.price) * Number(item.quantity);
    return output;
  }, 0);

  const totalQuantityOut = outcoming.reduce((acc, item) => {
    let output = acc + Number(item.quantity);
    return output;
  }, 0);

  return (
    <div className="outFruitsContainer">
      <h1>Total de Saídas:</h1>
      <h2> Saíram {totalQuantityOut * -1} produtos</h2>
      <h2>Preço total de saídas: R${totalPriceOut * -1} </h2>
      <ul className="outFruitsBox">
        {outcoming.map((fruits, index) => {
          return (
            <li key={index}>
              <h3> {fruits.name} </h3>
              <h4> Quantidade: {fruits.quantity} </h4>
              <h4> Preço: {fruits.price} </h4>
            </li>
          );
        })}
      </ul>
      <Button onClick={() => setShowInOut(true)} variant="contained">
        Mostrar entradas
      </Button>
    </div>
  );
};

export default OutDisplay;
