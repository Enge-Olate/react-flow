import ButtonPrimary from "../button/ButtonPrimary";
import styles from "./Formulario.module.css";
import useIMC from "../../hooks/useImc";
import { useState } from "react";

function Formulario({ type, onSubmit }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const { imc } = useIMC(peso, altura);
  
  const handleClick = () => {
    console.log(imc);
  };

  return (
    <>
      <form className={styles.form} type={type} onSubmit={onSubmit}>
        <input
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          type="number"
          placeholder="Peso (kg)"
          required
          max={600}
        />
        <input
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          type="number"
          placeholder="Altura (cm)"
          required
          max={2500}
        />
        <ButtonPrimary  label={"Calcular"} onClick={handleClick} type="submit" />
      </form>
    </>
  );
}
export default Formulario;
