import ButtonPrimary from "../button/ButtonPrimary";
import styles from './Formulario.module.css'
function Formulario({type, onSubmit}) {
    return(
        <>
        <form className={styles.form} type={type} onSubmit={onSubmit}>
            <input type="text" placeholder="Peso (kg)" />
            <input type="text" placeholder="Altura (cm)" />
            <ButtonPrimary label={"Calcular"} type="submit"/>
        </form>
        </>
    )
}
export default Formulario;