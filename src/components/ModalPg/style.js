import styled from 'styled-components';

export const Conteiner = styled.div`
    position: fixed;
    z-index: 9997;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;

    .mainModal {
        width: 60%;
        height: 70%;
        padding: 2rem 4rem;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: ${({ theme }) => theme.COLORS.Golden100};
        border-radius: .5rem;

        .valueModal {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    };

    .closeBtn {
        width: 100%;
        text-align: right;

        .close-button {
            position: relative;
            top: 0;
            background: transparent;
            padding: 0rem;
            border: none;
            cursor: pointer;
            font-size: 2.8rem;
            font-weight: bold;
            color: #333;
            transition: color 0.3s ease;
            transition: transform 0.3s ease, color 0.3s ease;
        }
    
        .close-button:hover {
            transform: rotate(90deg);
            color: #ff0000;
        }
    };

    @media (max-width: 1500px) {
        .mainModal {
            width: 70%;
            height: 55%;
        }
    };
   
    @media (max-width: 1280px) {
        .mainModal {
            width: 70rem;
            height: 65rem;
        }
    };
    
    @media (max-width: 768px) {
        .mainModal {
            width: 80%;
            height: 60%;
            padding: 2rem 2rem;
        }
    };

    @media (max-width: 425px) {
        .closeBtn {
            padding: 1rem 0rem 0rem 0rem;
            .close-button {
                font-size: 1.8rem;
            }
        };

        .mainModal {
            width: 96%;
            height: 25%;
            padding: .5rem;
        }
    };

    // Frames
    @keyframes bounce-in-top {
        0% {
            -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
            opacity: 0;
        }
        38% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
            opacity: 1;
        }
        55% {
            -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        72% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        81% {
            -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        90% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        95% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
    };

    .valueModal {
        -webkit-animation: bounce-in-top 1.1s both;
        animation: bounce-in-top 1.1s both;
    };

    .valueModal:hover {
        
    };
`;