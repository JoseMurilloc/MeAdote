import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  background-color: #FEF5F2;
  color: #393A3A;

  div.content {
    width: 388px;
    height: 475px;
    margin-left: 64px;


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
      
      div#forgot_password {
        display: flex;
        width: 18.4rem;
        justify-content: flex-end;
        margin-bottom: 0.33rem;
        margin-top: 0.26rem;
        
        span {
          cursor: pointer;
          font-size: 12px;
          line-height: 15px;
          color: #393A3A;
        }
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


      header {
        margin-bottom: 1.6rem; 
        p {
          font-size: 0.93rem;
          line-height: 123.52%;
          text-align: justify;
          color: #393A3A;
          width: 18rem;
          height: 3.4rem;
        }

        div#errorGlobalMessage {
          color: #931515;
          font-size: 0.8rem;
          line-height: 123.52%;
          background-color: #93151562;
          border-radius: 0.4rem;
          padding: 3px;
        }

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
      }

      div.socialContainer {
        height: 2.66rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div + div {
          margin-left: 0.8rem;
        }
       
        div {
          background: rgba(57, 58, 58, 0.1);
          border: 0;
          border-radius: 50%;
          width: 3.5rem;
          height: 3.5rem;

          display: flex;
          align-items: center;
          justify-content: center;
        }
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