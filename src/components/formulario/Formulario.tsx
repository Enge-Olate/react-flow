import ButtonPrimary from "../button/ButtonPrimary.tsx";
import React, { useMemo, useState } from "react";
import { Container, FormPage, TablePage } from "./style.ts";

type FaixaImc = {
  limite: number;
  label: string;
  descricaoTabela: string;
};

const FAIXAS_IMC: ReadonlyArray<FaixaImc> = [
  {limite: 17, label:"Muito abaixo do peso", descricaoTabela: "Abaixo de 17"},
  {limite: 18.5, label:"Abaixo do peso", descricaoTabela: "Entre 17 e 18,49"},
  {limite: 25, label:"Peso normal", descricaoTabela: "Entre 18,5 e 24,99"},
  {limite: 30, label:"Acima do peso", descricaoTabela: "Entre 25 e 29,99"},
  {limite: 35, label:"Obesidade I", descricaoTabela: "Entre 30 e 34,99"},
  {limite: 40, label:"Obesidade II (severa)", descricaoTabela: "Entre 35 e 39,99"},
  {limite: Infinity, label:"Obesidade III (mórbida)", descricaoTabela: "Maior ou igual a 40"},
]

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
      return "";
    }
    const valor = parseFloat(calcImc);
    const faixa = FAIXAS_IMC.find((regra)=>
      valor < regra.limite
    );
    return faixa ? faixa.label:"";      
    
  }, [calcImc]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Previne o recarregamento da página
    if (calcImc && classificacao) {
      setResult(true);
      if (onSubmit) {
        onSubmit(calcImc, classificacao);
      }
    }
  }

  const handlePeso = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeso(e.target.value);
    setResult(false);
  };
  const handleAltura = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      {result && calcImc && (
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
