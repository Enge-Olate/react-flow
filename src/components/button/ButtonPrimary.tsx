import styles from "./Button.module.css";

interface Props{
  label:string,
  onClick:()=>void,
  type?: 'button' | 'submit' | 'reset'
}

function ButtonPrimary({label, onClick, type='button' }:Props) {
    
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
        {label}
    </button>
  );
}
export default ButtonPrimary;
