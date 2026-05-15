import styled, { createGlobalStyle } from "styled-components";

export const RootGlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    outline: none;
    border: none
    }

    body {
    padding: 5.6rem 7.8rem;
    margin: 0 auto;
    max-width: 1280px;
    }
    @media screen and (max-width: 768px) {
        body {
            padding: 1rem;
        }
    }

`

export const MainPage = styled.main`
    width: 100%;
    margin-top: 20px;
    padding: 20px 20px;
    background-color: #ffd1ff;
    display: flex;
    justify-content: space-around;
    border-radius: 5px;

    @media screen and (max-width: 768px){
        main {
            flex-direction: column;
            align-items: center;
        }  
    }
`

export const Aside = styled.aside`
    max-width: 300px;
    padding: 0 10px;
    font-size: 18px;
    line-height: 2;
    color: #333;
    border:1px solid #4122d9;
    border-radius: 5px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    @media screen and (max-width: 768px){
        aside {
            max-width: 100%;
            margin-bottom: 20px;
        }   
    }

`

export const TitleAside = styled.h2`
    margin-bottom: 10px;
    text-align: center;

`