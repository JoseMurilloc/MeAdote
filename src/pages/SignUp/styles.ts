import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  background-color: #FEF5F2;
  color: #393A3A;

  img {
    height: 100%;
  }

  div.content {
    width: 25.86rem;
    margin-left: 4.26rem;


    form {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: flex-start;

      padding: 71px 21px 24px 41px;
  
      > div + div {
        margin-top: 1rem;
      }
            
      legend {
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;

        color: #393A3A;
        margin-bottom: 5px; 
      }

      h1 {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #393A3A;
        text-transform: uppercase;
        margin-bottom: 6px; 
      }

      p {
        font-size: 14px;
        line-height: 123.52%;
        text-align: justify;
        color: #393A3A;
        width: 270px;
        height: 51px;
        margin-bottom: 24px; 
      }

      button {
        background: #BB506A;
        border-radius: 64.75px;
        border: 0;
        width: 7.73rem;
        height: 2.46rem;

        font-size: 1.06rem;
        line-height: 1.26rem;
        letter-spacing: 0.015em;
        
        color: #FFFFFF;
        margin-bottom: 1.66rem;
        margin-top: 1.6rem;
      }
 
    }

  }
  
`;

export const Header = styled.header`

  display: flex;
  justify-content: flex-end;
  padding: 0 5.86rem;
  padding-top: 0.6rem;
 

  width: 100%;  

  aside {
    button {
      border: none;
      background: transparent;
    }

    button#openButton {
      color: rgba(57, 58, 58, 0.7);
      font-weight: 500;
      font-size: 1.067rem;
      line-height: 1.26rem;
      margin-right: 1.6rem; 
    }

    button#registerButton {
      background: var(--monza);
      border-radius: 4.32rem;
      border: none;
      box-shadow: 0px 4px 4px rgba(210, 6, 55, 0.22);
      width: 7.734rem;
      height: 2.467rem;

      color: var(--white);
      font-weight: 500;
      font-size: 1.067rem;
      line-height: 1.26rem;
    }
  }
`;