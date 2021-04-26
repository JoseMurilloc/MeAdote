import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  padding: 0 5.86rem;
  scroll-snap-align: start;

  display: flex;
  justify-content: space-between;
  align-items: center;

  aside + aside {
    margin-left: 7.66rem;
  }

  aside { 

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 36.86rem;

   
    h1 {
      color: var(--black-cape-cod);
      font-weight: bold;
      font-size: 2.66rem;
      line-height: 3.13rem;
      color: var(--monza);
    }

    p {
      color: var(--black-cape-cod);
      font-size: 1.46rem;
      line-height: 133.02%;
      margin-top: 0.53rem;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.06rem;
      

      background: var(--monza);
      border: 0;
      width: 10.13rem;
      height: 3.33rem;
      box-shadow: 0px 4px 4px rgba(210, 6, 55, 0.22);
      border-radius: 1.9rem;

      font-weight: 500;
      font-size: 1.06rem;
      line-height: 1.26rem;
      letter-spacing: 0.015em;
      text-transform: uppercase;
      color: var(--white);

      svg {
        margin-left: 7px;
      }

      &:active {
        animation: none;
      }

    }

  }
`;
