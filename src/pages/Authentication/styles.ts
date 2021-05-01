import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  background-color: #FEF5F2;
  color: #393A3A;
  
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