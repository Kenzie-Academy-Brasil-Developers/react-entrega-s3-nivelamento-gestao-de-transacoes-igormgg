import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./reset.css";
import "./App.css";
import AllDisplay from "./Components/AllDisplay";
import Form from "./Components/Form";
import InDisplay from "./Components/InDisplay";
import OutDisplay from "./Components/OutDisplay";
import FormOut from "./Components/FormOut";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const [showInOut, setShowInOut] = useState(true);

  const incomes = transactions.filter((fruits) => fruits.quantity > 0);
  const outcomes = transactions.filter((fruits) => fruits.quantity < 0);

  const [incoming, setIncoming] = useState(incomes);
  const [outcoming, setOutcoming] = useState(outcomes);

  return (
    <div className="App">
      <header className="App-header">Gestão de transações</header>
      <main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Form
          transactions={transactions}
          setTransactions={setTransactions}
          incoming={incoming}
          setIncoming={setIncoming}
          outcoming={outcoming}
          setOutcoming={setOutcoming}
        />
        <FormOut
          transactions={transactions}
          setTransactions={setTransactions}
          outcoming={outcoming}
          setOutcoming={setOutcoming}
        />
        <AllDisplay transactions={transactions} />
        {showInOut ? (
          <InDisplay setShowInOut={setShowInOut} incoming={incoming} />
        ) : (
          <OutDisplay setShowInOut={setShowInOut} outcoming={outcoming} />
        )}
      </main>
    </div>
  );
}

export default App;
