import styles from "./Button.module.css";

interface Props{
  label:string,
  type?: 'button' | 'submit' | 'reset'
}

function ButtonPrimary({label, type='button' }:Props) {
    
  return (
    <button className={styles.btn} type={type}>
        {label}
    </button>
  );
}
export default ButtonPrimary;
