import { Button } from "@material-ui/core";
import "./styles.css";

const InDisplay = ({ setShowInOut, incoming }) => {
  const totalPriceIn = incoming.reduce((acc, item) => {
    let output = acc + Number(item.price) * Number(item.quantity);
    return output;
  }, 0);

  const totalQuantityIn = incoming.reduce((acc, item) => {
    let output = acc + Number(item.quantity);
    return output;
  }, 0);

  return (
    <div className="inFruitsContainer">
      <h1>Total de entradas:</h1>
      <h2> Entraram {totalQuantityIn} produtos</h2>
      <h2>Preço total de entradas: R${totalPriceIn} </h2>
      <ul className="inFruitsBox">
        {incoming.map((fruits, index) => {
          return (
            <li key={index}>
              <h3> {fruits.name} </h3>
              <h4> Quantidade: {fruits.quantity} </h4>
              <h4> Preço: {fruits.price} </h4>
            </li>
          );
        })}
      </ul>
      <Button onClick={() => setShowInOut(false)} variant="contained">
        Mostrar saídas
      </Button>
    </div>
  );
};

export default InDisplay;
