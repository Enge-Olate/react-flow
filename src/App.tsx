import Formulario from "./components/formulario/Formulario.tsx";
import Header from "./components/header/Header.tsx";
import './App.module.css';

function App() {
  return (
    <>
        <Header title="Calculadora de IMC" />
      <main>
        <aside>
          <h2>O que é IMC?</h2>
          <p>
            O Índice de Massa Corporal (IMC) é uma medida internacional usada
            para calcular se uma pessoa está no peso ideal, acima do peso ou
            abaixo do peso ideal. O IMC é calculado dividindo o peso da pessoa
            (em quilogramas) pela altura (em metros) ao quadrado. Por exemplo,
            uma pessoa que pesa 70 kg e tem 1,75 m de altura teria um IMC de
            22,86.
          </p>
          <a href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal">
            <i>Saiba mais sobre IMC</i>
          </a>
        </aside>
        <Formulario  />
      </main>
    </>
  );
}

export default App;
