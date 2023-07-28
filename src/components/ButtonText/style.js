import styled from 'styled-components';

export const Conteiner = styled.button`
    width: 28rem;
    height: 6rem;
    color: ${({theme, isActive }) => isActive ? theme.COLORS.BACKGROUND_900 : theme.COLORS.WHITE};
    background-color: ${({theme, isActive }) => isActive ? theme.COLORS.White : theme.COLORS.Golden100};

    border: none;
    border-radius: .3rem;
    font-family: 'Philosopher', sans-serif;
    font-size: 1.6rem;

    position: relative;

    a{
        position: absolute;
        top: 0;
        left: 0;
        
        width: 28rem;
        height: 6rem;

        text-align: center;
    }
`;