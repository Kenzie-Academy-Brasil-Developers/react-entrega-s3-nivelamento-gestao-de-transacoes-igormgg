import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

const FormOut = ({
  transactions,
  setTransactions,
  outcoming,
  setOutcoming,
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmitOut = (data) => {
    setTransactions([...transactions, data]);
    setOutcoming([...outcoming, data]);
  };

  return (
    <form className="formBox" onSubmit={handleSubmit(onSubmitOut)}>
      <h1>Cadastrar saída de frutas</h1>
      <TextField {...register("name")} placeholder="Nome" size="small" />
      <TextField
        {...register("quantity")}
        placeholder="Quantidade (com negativo)"
        size="small"
      />
      <TextField {...register("price")} placeholder="Preço" size="small" />
      <Button type="submit" variant="contained">
        Cadastrar saída
      </Button>
    </form>
  );
};

export default FormOut;
