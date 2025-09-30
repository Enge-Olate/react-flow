import { useState } from "react";
import styles from "./Button.module.css";

function ButtonPrimary({label, onClick, type = "button" }) {
  const [bolha, setBolha] = useState([]);
  const click = (e) => {
    console.log(e);
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const novaBolha = {
      id: Date.now(),
      x,
      y,
    };
    setBolha((previaBolha) => [...previaBolha, novaBolha]);
    if (onClick) onclick();
    setTimeout(() => {
      setBolha((previaBolha) =>
        previaBolha.filter((b) => b.id !== novaBolha.id)
      );
    }, 600);
  };
  return (
    <button className={styles.btn} type={type} onClick={click}>
        {label}
      {bolha.map((b)=>(
        <span key={b.id} className={styles.bolha} style={{left: bolha.x, top: bolha.y}}></span>
      ))}
    </button>
  );
}
export default ButtonPrimary;
