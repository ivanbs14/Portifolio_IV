import styled from "styled-components";
import BackgroundImg from '../../assets/06edit.jpg';

export const Conteiner = styled.div`

    .homePage {
        display: grid;
        grid-template-rows: 100vh auto auto;
        grid-template-areas: 
            "section1"
            "section2"
            "section3"
        ;
    };
        
    .sectionImg{
        width: 100%;
        height: 100vh;
        background-image: url(${BackgroundImg});
        background-size: cover;
        background-position: center center;
        opacity: 0.3;
        
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    };
    
    #sectionOne{
        grid-area: section1;
        padding: 6rem 3.6rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: relative;
        
        .navigation{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0rem 4rem;
    
            ul{
                margin-right: 8rem;
                display: flex;
                gap: 3.2rem;
    
                list-style: none;
                font-family: 'PT Serif', serif;
    
                li{
                    font-size: 2.4rem;
                    font-weight: 700;
                    letter-spacing: .2rem;
                    transition: transform 0.3s ease;
                }
    
                li:hover{
                    transform: scale(1.1);
                }
            }
    
        };

        .subscripts {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            margin-bottom: 12rem;

            h2{
                font-family: 'Philosopher', sans-serif;
                font-size: 1.8rem;
            }

            button{
                font-size: 1.8rem;
                letter-spacing: 1px;
                background-color: ${({ theme }) => theme.COLORS.Golden200};
                transition: transform 0.3s ease;
                margin-bottom: 2rem;
            }

            button:hover{
                transform: scale(1.1);
                background-color: ${({ theme }) => theme.COLORS.Golden100};
                color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            }
        };
    };
    
    
    #sectionTwo{
        grid-area: section2;
        margin: 3.6rem;
        border-radius: 1rem;
        padding: 4.4rem 3.6rem;

        background-color: ${({ theme }) => theme.COLORS.Golden100};

        .cabecalho{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 6.4rem;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

            h2{
                order: 1;
                font-size: 3.2rem;
                letter-spacing: 3px;
            }

            div{
                order: 2;
            }
        };

        .projectView {
            display: flex;
        
            justify-content: center;
            flex-wrap: wrap;
        }
    };

    #sectionTree{
        grid-area: section3;
        display: flex;
        flex-direction: column;
        padding: 3.6rem;

        background-color: ${({ theme }) => theme.COLORS.WHITE};

        .cabecalhoTree{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0rem 4rem;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

            h2{
                order: 1;
                font-size: 3.2rem;
                letter-spacing: 2px;
            }

            div{
                order: 2;
                display: flex;
                align-items: center;

                img{
                    width: 6rem;
                    height: 6rem;
                }

                h3{
                    margin-bottom: 0;
                }
            }
        }

        #sobreM{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10rem;
            padding: 5rem;

            .perfil{
                max-width: 50rem;
            }
        }

        #descrtP{

            button{
                margin-top: 3.2rem;
                width: 20rem;
                height: 4rem;

                color: ${({ theme }) => theme.COLORS.WHITE};
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
                border: .5px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
                transition: transform 0.3s ease;
            }

            button:hover{
                transform: scale(1.1);
                background-color: ${({ theme }) => theme.COLORS.Golden100};
                color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            }

            h3{
                font-size: 3.2rem;
            }

            .pTwo{
                margin-top: 3.2rem;
                font-weight: 700;
            }

            p{
                font-family: 'Philosopher', sans-serif;
                font-size: 1.6rem;

                a{
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #28203e;
                }
            }
        }
        
        .perfil{
            width: 30%;
        }

        h3{
            margin-bottom: 3.2rem;
        }

        h3, p{
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }

        #socialM{
            margin-top: 8px;
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

            svg{
                width: 4rem;
                height: 4rem;
                transition: transform 0.3s ease;
            }

            svg:hover{
                transform: scale(1.1);
                color: ${({ theme }) => theme.COLORS.Golden100};
            }

            #email{
                svg {
                    width: 4.6rem;
                    height: 4.6rem; 
                }
            }
        }

    }

    @media (max-width: 1024px) {

        .sectionImg{
            height: 100vh;
            opacity: 0.3;
        };

        .navigation{
            flex-direction: column;
        }

        #sectionOne{
            grid-area: section1;

            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 3rem 0;

            .navigation{
                ul{
                    margin-right: 0rem;
    
                    li{
                        font-size: 2.4rem;
                        font-weight: 600;
                        letter-spacing: 0;
                        margin-top: 2rem;
                        transition: transform 0.3s ease;
                    }

                    li:hover{
                        transform: scale(1.1);
                    }
                }
            };

            .subscripts {
                margin-bottom: 10rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                h2{
                    font-size: 1.8rem;
                    text-align: center;
                    margin-bottom: 2rem;
                }
    
                button{
                    width: 22rem;
                    height: 4rem;
                    font-size: 1.8rem;
                    font-weight: 700;
                    letter-spacing: 0;
                    transition: transform 0.3s ease;
    
                    a{
                        width: 22rem;
                        height: 4rem;
                    }
                }
    
                button:hover{
                    transform: scale(1.1);
                }
            };

        };


        #sectionTwo{
            grid-area: section2;
            margin: 0;
            border-radius: 0;
            padding: 2rem 1.6rem;

            .cabecalho{
                flex-direction: column;
                margin-bottom: 4rem;

                h2{
                    order: 2;
                    margin-top: 2rem;
                    font-size: 2.4rem;
                    letter-spacing: 1px;
                }

                div{
                    order: 1;
                }
            }
        };

        #sectionTree{
            grid-area: section3;
            display: flex;
            flex-direction: column;
            padding: 6.4rem 0;

            .cabecalhoTree{
                flex-direction: column;
                margin-bottom: 0;

                h2{
                    order: 2;
                    margin-top: 2rem;
                    font-size: 2.4rem;
                    letter-spacing: 1px;
                }

                div{
                    order: 1;
                }
            }

            #sobreM{
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                padding: 2rem 4rem;
                
                .perfil{
                    width: 70%;
                }

                svg{
                    width: 5rem;
                    height: 5rem;
                    transition: transform 0.3s ease;
                }

                svg:hover{
                    width: 5.5rem;
                    height: 5.5rem;
                    transform: scale(1.1);
                }

                #email{
                    svg {
                        width: 5.6rem;
                        height: 5.6rem; 
                    }
                }
            }

            #descrtP{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 0;

                .boxText {
                    width: 55rem;
                }

                p{
                    font-size: 1.8rem;

                    a{
                        font-size: 1.8rem;
                        font-weight: 700;
                        color: #28203e;
                    }
                }

                p:nth-child(3){
                    font-size: 2.4rem;
                }

                button{
                    margin-top: 2.4rem;
                    width: 30rem;
                    height: 6rem;

                    font-size: 2.2rem;
                    transition: transform 0.3s ease;

                    a{
                        width: 30rem;
                        height: 6rem;
                    }
                }

                button:hover{
                   transform: scale(1.1);
                }
            }
        }
    };

    @media (max-width: 425px) {
        #sectionOne{

            .subscripts {
                width: 35rem;

                h2{
                    font-family: 'Philosopher', sans-serif;
                    font-size: 1.8rem;
                }
            };
        };

        #sectionTree{
            #sobreM{
                padding: 1rem 2rem;
            }

            #descrtP{
                .boxText {
                    width: 33rem;
                }

            }
        }
    }
`;

export const Link = styled.a`

    svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`;