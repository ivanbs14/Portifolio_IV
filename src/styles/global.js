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
        width: 0px;  /* Define a largura da barra de rolagem vertical como 0 */
        height: 0px; /* Define a altura da barra de rolagem horizontal como 0 */
    }

    /* Personaliza os botões da barra de rolagem (setas) */
    ::-webkit-scrollbar-button {
        display: none; /* Oculta os botões da barra de rolagem */
    }

    /* Personaliza a alça de rolagem (arrastável) */
    ::-webkit-scrollbar-thumb {
        background-color: transparent; /* Torna a alça de rolagem invisível */
    }

    /* Personaliza a faixa da barra de rolagem (barra de progresso) */
    ::-webkit-scrollbar-track {
        background-color: transparent; /* Torna a faixa da barra de rolagem invisível */
    }

    /* Personaliza parte do caminho da barra de progresso */
    ::-webkit-scrollbar-track-piece {
        background-color: transparent; /* Torna parte do caminho da barra de rolagem invisível */
    }

    /* Personaliza o canto inferior da barra de rolagem */
    ::-webkit-scrollbar-corner {
        background-color: transparent; /* Torna o canto inferior invisível */
    }

    /* Personaliza a alça arrastável no canto inferior */
    ::-webkit-resizer {
        display: none; /* Oculta a alça arrastável no canto inferior */
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