import ButtonPrimary from "../button/ButtonPrimary.tsx";
import React, { useMemo, useState } from "react";
import { Container, FormPage, TablePage } from "./style.ts";

type FormularioProps = {
  onSubmit?: (calcImc: string, classificacao: string) => void;
};

function Formulario({ onSubmit }: FormularioProps) {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [result, setResult] = useState<boolean>(false);
  const calcImc = useMemo(() => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    if (!p || !a || a === 0) {
      return null;
    }
    const alturaMetro = a / 100;
    const calculo = p / (alturaMetro * alturaMetro);
    return calculo.toFixed(2);
  }, [peso, altura]);

  const classificacao = useMemo(() => {
    if (!calcImc) {
      return null;
    }
    const valor = parseFloat(calcImc);
    let novaClassificacao = "";
    if (valor < 17) {
      novaClassificacao = "Muito abaixo do peso";
    } else if (valor < 18.5) {
      novaClassificacao = "Abaixo do peso";
    } else if (valor < 25) {
      novaClassificacao = "Peso normal";
    } else if (valor < 30) {
      novaClassificacao = "Acima do peso";
    } else if (valor < 35) {
      novaClassificacao = "Obesidade 1";
    } else if (valor < 40) {
      novaClassificacao = "Obesidade grau 2 (severa)";
    } else {
      novaClassificacao = "Obesidade grau 3";
    }
    return novaClassificacao;
  }, [calcImc]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Previne o recarregamento da página
    if (calcImc && classificacao) {
      setResult(true);
      if(onSubmit){
        onSubmit(calcImc, classificacao);
      }
    }
  }

  const handlePeso = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setPeso(e.target.value);
    setResult(false);
  };
  const handleAltura = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setAltura(e.target.value);
    setResult(false);
  };

  return (
    <Container>
      <FormPage onSubmit={handleSubmit}>
        <div>
          <input
            value={peso}
            onChange={handlePeso}
            type="number"
            placeholder="Peso (kg)"
            required
            max={600}
          />
          <input
            value={altura}
            onChange={handleAltura}
            type="number"
            placeholder="Altura (cm)"
            required
            max={250}
          />
        </div>
        <ButtonPrimary label={"Calcular"} type="submit" />
      </FormPage>
      <hr />
      {result && calcImc &&  (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p style={{ fontWeight: "bold" }}>Seu IMC é: {calcImc}</p>
          <p style={{ fontWeight: "bold" }}>Classificação: {classificacao}</p>
        </div>
      )}
      <TablePage>
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
            <td>Maior ou igual a 40</td> <td>Obesidade III (mórbida)</td>
          </tr>
        </tbody>
      </TablePage>
    </Container>
  );
}

export default Formulario;
