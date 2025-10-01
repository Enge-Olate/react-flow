import { useMemo } from "react";

function useIMC(peso, altura) {
  const imc = useMemo(() => {
    return peso / (altura / 100) ** 2;
  }, [peso, altura]);

  const classificacao = useMemo(() => {
    if (imc === null) return "Informe peso e altura válidos";
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade grau I";
    if (imc < 39.9) return "Obesidade grau II";
    return "Obesidade grau III";
  }, [imc]);

  return {
    imc: imc ? imc.toFixed(2) : 0,
    classificacao,
  };
}
export default useIMC;
