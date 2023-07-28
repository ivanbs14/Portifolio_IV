import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 100px;

    padding: 20px 0;
    border-bottom: 2px solid black;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    img{
        order: 2;
        width: 400px;
        height: 240px;
        border-radius: 10px;
    }

    .descript{
        order: 1;
        width: 600px;
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
    }

    h3, p, span{
        margin-bottom: 8px;
    }

    h3{
        font-size: 32px;
    }

    p{
        font-family: 'Philosopher', sans-serif;
        font-size: 18px;
    }

    p:nth-child(3){
        margin-bottom: 1px;
        font-weight: 700;
    };

    span{
        font-family: 'Philosopher', sans-serif;
        font-size: 12px;
    };

    .datas{
        display: flex;
        gap: 10px;
    };

    button{
        margin: 10px 0;
        border: 1px solid #000;
        width: 150px;
        height: 45px;
        color: ${({theme, isActive }) => isActive ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};

        border-radius: 5px;
        font-size: 16px;

        a{
            width: 150px;
            height: 45px;
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
        align-items: center;

        img{
            order: 1;
        }

        .descript{
            order: 2;
            align-items: center; 
        };        
    }
`;