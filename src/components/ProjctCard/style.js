import styled from 'styled-components';

export const Conteiner = styled.div`
   // width: 100%;
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

    h3, p, span{
        margin-bottom: 0.8rem;
    };

    h3{
        font-size: 2.8rem;
    };

    p{
        font-family: 'Philosopher', sans-serif;
        font-size: 1.6rem;
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
        transition: transform 0.3s ease;

        a{
            width: 15rem;
            height: 4.5rem;
        }
    };

    button:hover {
        transform: scale(1.1);

        color: ${({ theme }) => theme.COLORS.WHITE};
        border-color: ${({ theme }) => theme.COLORS.WHITE};
    };

    @media (max-width: 1024px) {
        width: 100%;
        flex-direction: column;
        gap: 3rem;
        padding: 1rem 0;
        margin-bottom: 1.6rem;

        img{
            width: 35rem;
            height: 20rem;
            border-radius: 0.5rem;
        };

        .descript{
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
            }
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

        button{
            margin: 0.5rem 0;
            border-radius: 3px;
            font-size: 1.8rem;
        };
    }
`;