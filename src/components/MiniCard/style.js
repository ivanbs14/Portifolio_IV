import styled from 'styled-components';

export const Conteiner = styled.div`
    .image-container {
        position: relative;
        border: 0.3px solid gray;
    }

    .text {
        position: absolute;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 5px;
        border-radius: 3px;
        
        font-size: 14px;
    }

    .image-container:hover .text {
        display: block;
    }
`;