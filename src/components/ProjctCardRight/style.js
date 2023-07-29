import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10rem;

    padding: 2rem 0;
    border-bottom: 2px solid black;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    img{
        order: 2;
        width: 40rem;
        height: 24rem;
        border-radius: 1rem;
    }

    .descript{
        order: 1;
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
    }

    h3, p, span{
        margin-bottom: 8px;
    }

    h3{
        font-size: 2.8rem;
    }

    p{
        font-family: 'Philosopher', sans-serif;
        font-size: 1.6rem;
    }

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
        gap: 1rem;
    };

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
        align-items: center;
        gap: 3rem;
        padding: 1rem 0;
        margin-bottom: 1.6rem;

        img{
            order: 1;
            width: 35rem;
            height: 20rem;
            border-radius: 0.5rem;
        }

        .descript{
            order: 2;
            align-items: center; 
            align-items: center; 
            width: 36rem;

            .icons{
                gap: 3px;
                margin: 0.5rem 0 1rem 0;

                img{
                    width: 4.5rem;
                    height: 4.5rem;
                    border-radius: 2px;
                    cursor: pointer;
                }

                img:hover{
                    width: 5rem;
                    height: 5rem;
                }
            };  
        };
        
        h3, p, span{
            margin-bottom: 1rem;
        };

        h3{
            font-size: 2.4rem;
        };

        p{
            font-size: 2rem;
        };

        p:nth-child(3){
            margin-bottom: 0.5px;
        };

        span{
            font-size: 1.6rem;
        };
    }
`;