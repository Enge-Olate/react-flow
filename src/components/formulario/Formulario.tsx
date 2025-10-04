import ButtonPrimary from "../button/ButtonPrimary.tsx";
import styles from "./Formulario.module.css";
import React, { useState } from "react";
type FormularioProps = {
  type: string;
  onSubmit?:(e: React.FormEvent<HTMLFormElement>)=> void;
}

function Formulario({ type, onSubmit }:FormularioProps) {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [imc, setImc] = useState<string | null>(null);
  const [classificacao, setClassificacao] = useState<string>("");

  function handleClick(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const pesoNum = parseInt(peso);
    const alturaNum = parseInt(altura);
    if (pesoNum > 0 && alturaNum > 0) {
      const alturaEmMetros = alturaNum / 100;
      const imcCalculado = pesoNum / (alturaEmMetros * alturaEmMetros);
      setImc(imcCalculado.toFixed(2));
      if (imcCalculado < 17) {
        setClassificacao("Muito abaixo do peso");
      } else if (imcCalculado >= 17 && imcCalculado < 18.49) {
        setClassificacao("Abaixo do peso");
      } else if (imcCalculado >= 18.5 && imcCalculado < 24.99) {
        setClassificacao("Peso normal");
      } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
        setClassificacao("Acima do peso");
      } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
        setClassificacao("Obesidade 1");
      } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
        setClassificacao("Obesidade grau 2 (severa)");
      } else {
        setClassificacao("Obesidade grau 3");
      }
    } else {
      alert("Por favor, insira valores válidos para peso e altura.");
    }
  }

  return (
    <div>
      <form className={styles.form} type={type} onSubmit={onSubmit}>
        <div>
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
        </div>
        <ButtonPrimary label={"Calcular"} onClick={handleClick} type="submit" />
      </form>
      <hr />
      {imc && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p style={{fontWeight:"bold"}}>Seu IMC é: {imc}</p>
          <p style={{fontWeight:"bold"}}>Classificação: {classificacao}</p>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th colSpan={1}>IMC</th>
            <th colSpan={1}>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo de 17</td>
            <td>Muito abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 17 e 18,49</td>
            <td>Abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 18,5 e 24,99</td>
            <td>Peso normal</td>
          </tr>
          <tr>
            <td>Entre 25 e 29.99</td>
            <td>Acima do peso</td>
          </tr>
          <tr>
            <td>Entre 30 e 34,99</td>
            <td>Obesidade I</td>
          </tr>
          <tr>
            <td>Entre 35 e 39,99</td>
            <td>Obesidade II (severa)</td>
          </tr>
          <tr>
            <td>Maior que 40</td>
            <td>Obesidade III (mórbida)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Formulario;
