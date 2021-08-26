import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   outline: 0;
    box-sizing: border-box;
 }

 body,
 #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 100vh;
    position: relative;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    font: 1rem 'Poppins', sans-serif;
 }

 a {
   text-decoration: none;
   font-weight: 700;
   cursor: pointer;
   transition: 0.2s;
    border: 0;
 }

 button {
    display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   border: 0;
 }

 ul {
   list-style: none;
   text-align: left;
   padding: 0;
 }

 svg {
   overflow: visible;
 }
`;
