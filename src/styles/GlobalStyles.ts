
import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`  

  :root {
    --red-light: #BB506A;
    --monza: #D20637;
    --deep-blush: #E07A93;
    --lavender: #C46FD9;
    --black-cape-cod: #393A3A;
    --yellow-wattle: #D5D83F;
    --gray-silver: #C4C4C4;
    --tradewind: #58BAA2;
    --red-falu: #7B1414;
    --red-tamarillo: #931515;
    --alizarin-crimson: #E52F2F;
    --white: #FFFFFF;
  }

  @media (max-width: 750px) {
    html {
      font-size: 70.5%; // 11.28px
    }
  }

  @media (min-width: 751px) {
    html {
      font-size: 75%; // 12px
    }
  }

  @media (min-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  } 

  @media (min-width: 1400px) {
    html {
      font-size: 100%; // 16px
    }
  }


  body {
    font-family: 'Inter', sans-serif;
    background: #FEF3EF;
  }
  * {
    box-sizing: inherit;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 
  ol, ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }


  /* Global styles for Toast */

  .Toastify__toast--success {
    background-color: #58BAA2;
    font-weight: 500;
  }

  .Toastify__toast--error {
    background-color: #D20637;
    font-weight: 500;
  } 
`;