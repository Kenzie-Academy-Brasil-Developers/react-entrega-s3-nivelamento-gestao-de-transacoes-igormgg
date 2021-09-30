import "./styles.css";

const AllDisplay = ({ transactions }) => {
  return (
    <div className="allFruitsContainer">
      <h1>Todas as frutas:</h1>
      <ul className="allFruitsBox">
        {transactions.map((fruits, index) => {
          return (
            <li key={index}>
              <h2> {fruits.name} </h2>
              <h3> Quantidade: {fruits.quantity} </h3>
              <h3> Preço: {fruits.price} </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllDisplay;
