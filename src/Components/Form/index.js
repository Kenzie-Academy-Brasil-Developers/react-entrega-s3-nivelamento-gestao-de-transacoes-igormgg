import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./styles.css";

const Form = ({ transactions, setTransactions, incoming, setIncoming }) => {
  const { register, handleSubmit } = useForm();

  const onSubmitIn = (data) => {
    setTransactions([...transactions, data]);
    setIncoming([...incoming, data]);
  };

  return (
    <form className="formBox" onSubmit={handleSubmit(onSubmitIn)}>
      <h1>Cadastrar entrada de frutas</h1>
      <TextField {...register("name")} placeholder="Nome" size="small" />
      <TextField
        {...register("quantity")}
        placeholder="Quantidade"
        size="small"
      />
      <TextField {...register("price")} placeholder="Preço" size="small" />
      <Button type="submit" variant="contained">
        Cadastrar entrada
      </Button>
    </form>
  );
};

export default Form;
