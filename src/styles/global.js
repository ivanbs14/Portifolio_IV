import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }
    
    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        
        -webkit-font-smoothing: antialiased;
    }

    /* Personaliza toda a barra de rolagem */
    ::-webkit-scrollbar {
        width: 0px; 
        height: 0px; 
    }

    ::-webkit-scrollbar-button {
        display: none; 
    }

    ::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent; 
    }

    ::-webkit-scrollbar-track-piece {
        background-color: transparent; 
    }

    ::-webkit-scrollbar-corner {
        background-color: transparent; 
    }

    ::-webkit-resizer {
        display: none;
    }

    body, input, button, textarea {
        font-size: 1.6rem;
        outline: none;
    }

    a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        color: ${({ theme }) => theme.COLORS.Golden400};;
        filter: brightness(0.9);
    }
`;