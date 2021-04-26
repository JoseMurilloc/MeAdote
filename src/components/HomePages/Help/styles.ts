import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  
  header { 
    margin-top: 6.66rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--red-light);
    padding: 0 11.2rem;

    img {
      width: 21.8rem;
      height: 13.93rem;
    }

    h1 {
      color: var(--white);
      font-size: 1.6rem;
      line-height: 1.86rem;
    }

    p {
      font-size: 1.066rem;
      line-height: 1.4rem;
      text-align: justify;
      margin-top: 5px;

      color: #FFFFFF;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    h1 {
      font-size: 1.6rem;
      line-height: 1.866rem;
      color: #393A3A;
    }

    section {
      display: flex;
      align-items: center;
      margin-top: 2.53rem;

      div.card {
        background: rgba(123, 20, 20, 0.05);
        border-radius: 0.5rem;

        width: 158px;
        height: 175px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & + div {
          margin-left: 2.33rem;
        }

        img {
          margin-bottom: 0.73rem;
        }

        span {
          color: var(--black-cape-cod);
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }
`;
