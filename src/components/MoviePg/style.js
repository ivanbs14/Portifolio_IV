import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .player-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .react-player {
        padding: 2rem 4rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .descriptMovie{
        width: 100%;
        padding: 0rem 4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .icons{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 0.5rem 0 1rem 0;

            img{
                width: 3.2rem;
                height: 3.2rem;
                border-radius: .3rem;
                cursor: pointer;
                transition: transform 0.3s ease;
            }

            img:hover{
                transform: scale(1.1);
            }
        }
    };

    @media (max-width: 1024px) {
        
    };

    @media (max-width: 425px) {

        .react-player {
            padding: 1rem 0;
        };

        .descriptMovie {
            display: none;
        }
    };

`;