import { useMemo } from "react";

function useIMC(peso, altura){
    
    const imc = useMemo(()=>{
        return peso / ((altura /100)**2);
    }, [peso, altura]);
    return {
        imc: imc ? imc.toFixed(2) : 0
    };
}
export default useIMC;