import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 0;
    border-bottom: 2px solid black;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    img{
        width: 40rem;
        height: 24rem;
        border-radius: 1rem;
    };

    .descript{
        width: 60rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .icons{
            display: flex;
            gap: 5px;
            margin: 0.5rem 0 1rem 0;

            img{
                width: 3.2rem;
                height: 3.2rem;
                border-radius: 3px;
                cursor: pointer;
            }

            img:hover{
                width: 3.5rem;
                height: 3.5rem;
            }
        }
    };

    h3, p, span{
        margin-bottom: 8px;
    };

    h3{
        font-size: 3.2rem;
    };

    p{
        font-family: 'Philosopher', sans-serif;
        font-size: 1.8rem;
    };

    p:nth-child(3){
        margin-bottom: 1px;
        font-weight: 700;
    };

    span{
        font-family: 'Philosopher', sans-serif;
        font-size: 1.2rem;
    };

    .datas{
        display: flex;
        gap: 10px;
    }

    button{
        margin: 1rem 0;
        border: 1px solid #000;
        width: 15rem;
        height: 4.5rem;
        color: ${({theme, isActive }) => isActive ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};

        border-radius: 5px;
        font-size: 1.6rem;

        a{
            width: 15rem;
            height: 4.5rem;
        }
    };

    button:hover {
        width: 16rem;
        height: 5rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        border-color: ${({ theme }) => theme.COLORS.WHITE};
    };

    @media (max-width: 430px) {
        flex-direction: column;
        gap: 5rem;

        .descript{
            align-items: center; 

        };        
    }
`;