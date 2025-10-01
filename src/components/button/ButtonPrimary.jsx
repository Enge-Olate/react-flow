import styles from "./Button.module.css";

function ButtonPrimary({label, onClick, type = "button" }) {
    
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
        {label}
    </button>
  );
}
export default ButtonPrimary;
