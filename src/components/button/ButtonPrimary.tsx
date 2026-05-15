import { ButtonPage } from "./style";

interface Props{
  label:string,
  type?: 'button' | 'submit' | 'reset'
}

function ButtonPrimary({label, type='button' }:Props) {
    
  return (
    <ButtonPage type={type}>
        {label}
    </ButtonPage>
  );
}
export default ButtonPrimary;
