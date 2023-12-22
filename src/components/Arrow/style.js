import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;

   span{
      width: 10px;
      height: 40px;
      background: white;
      border-radius: 5px;
      margin: 6px;
      animation: move 1.1s infinite ease-in-out;
   }
   span:nth-of-type(1){
      transform: rotate(-45deg);
   }

   span:nth-of-type(2){
      transform: rotate(45deg);
   }
   @keyframes move {
      0%{margin-top: 0;}
      50%{margin-top: 60px;}
      100%{margin-top: 0;}
      
   }
`;