import Formulario from "./components/formulario/Formulario";
import Header from "./components/header/Header";
import "./styles/global.css";

function App() {

  return (
    <>
      <header>
        <Header title="Calculadora de IMC" />
      </header>
      <main>
        <Formulario type="submit" onSubmit={(e) => e.preventDefault()} />
      </main>
      
    </>
  );
}

export default App;
