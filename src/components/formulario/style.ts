import styled from "styled-components";

export const Container = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius:5px;
    hr{
        width:250px;
        margin: 5px auto;
        border: 0.5px solid #4122d9;
    }    
}

`
export const FormPage = styled.form`
    max-width: 300px;
    height: fit-content;
    padding: 10px 20px;
    padding: 10px;

    div{
        display: flex;
        flex-direction: row;
    }
    input{
        width:100%;
        margin: 0 4px;
        font-size: 16px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 700;
        border-bottom: 1px solid #4122d9;
        
        &::placeholder{
            color: #000;
            font-weight: 700;
            opacity: 0.4;    
        
        }
        
    }    

`
export const TablePage = styled.table`
    margin: 10px auto;
    border-collapse: collapse;
    width: 50%;

    th, td{
    border: 1px ridge #4122d9;
    padding: 10px 20px;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 700;
}

`
