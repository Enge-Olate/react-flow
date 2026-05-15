import { HeaderPage } from './style';
type Props ={
    title: string
}
function Header({title}:Props){

    return(
        <HeaderPage>{title}</HeaderPage>
    )
}
export default Header;