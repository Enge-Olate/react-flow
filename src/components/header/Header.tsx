import styles from './Header.module.css'
type Props ={
    title: string
}
function Header({title}:Props){

    return(
        <header className={styles.header}>{title}</header>
    )
}
export default Header;