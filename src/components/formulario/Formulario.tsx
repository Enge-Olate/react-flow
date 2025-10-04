import ButtonPrimary from "../button/ButtonPrimary.tsx";
import styles from "./Formulario.module.css";
import React, { useState } from "react";

type FormularioProps = {
  onSubmit?: (imc: string, classificacao: string) => void;
};

function Formulario({ onSubmit }: FormularioProps) {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [imc, setImc] = useState<string | null>(null);
  const [classificacao, setClassificacao] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Previne o recarregamento da página

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (pesoNum > 0 && alturaNum > 0) {
      const alturaEmMetros = alturaNum / 100;
<<<<<<< HEAD
      const imcCalculado = pesoNum / (alturaEmMetros **2 );
=======
      const imcCalculado = pesoNum / alturaEmMetros ** 2;
>>>>>>> 233371b (Adicionando responsividade.)
      const imcFormatado = imcCalculado.toFixed(2);

      let novaClassificacao = "";
      if (imcCalculado < 17) {
        novaClassificacao = "Muito abaixo do peso";
      } else if (imcCalculado < 18.5) {
        novaClassificacao = "Abaixo do peso";
      } else if (imcCalculado < 25) {
        novaClassificacao = "Peso normal";
      } else if (imcCalculado < 30) {
        novaClassificacao = "Acima do peso";
      } else if (imcCalculado < 35) {
        novaClassificacao = "Obesidade 1";
      } else if (imcCalculado < 40) {
        novaClassificacao = "Obesidade grau 2 (severa)";
      } else {
        novaClassificacao = "Obesidade grau 3";
      }

      setImc(imcFormatado);
      setClassificacao(novaClassificacao);

      if (onSubmit) {
        onSubmit(imcFormatado, novaClassificacao);
      }
    } else {
      alert("Por favor, insira valores válidos para peso e altura.");
    }
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
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
            max={250} 
          />
        </div>
        <ButtonPrimary label={"Calcular"} type="submit" />
      </form>
      <hr />
      {imc && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p style={{ fontWeight: "bold" }}>Seu IMC é: {imc}</p>
          <p style={{ fontWeight: "bold" }}>Classificação: {classificacao}</p>
        </div>
      )}
      <table>
        {/* O restante da tabela continua igual */}
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
            <td>Maior ou igual a 40</td>{" "}
            {/* Corrigi a última linha da tabela para maior clareza */}
            <td>Obesidade III (mórbida)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Formulario;
