import styled from 'styled-components';

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .logs{
        width: 6rem;
        height: 6rem;
    }

    h3{
        font-family: 'PT Serif', serif;
        font-size: 3.4rem;
        display: flex;
        flex-direction: column;
        letter-spacing: .4rem;

        span{
            font-size: 1.6rem;
            letter-spacing: .1rem;
            margin-bottom: 1rem;
        }
    }
`;