import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 3.33rem;


  aside { 
    display: flex;
    margin-top: 20px;
    
    div.green {
      background: #58BAA2;
    }
    
    div.purple {
      background: rgba(196, 111, 217, 0.82);
    }

    div.yellow {
      background: #D5D83F;
    }

    div { 
      display: flex;
      justify-content:center;
      align-items: center;
      background: #BB506A;
      border-radius: 50%;
      width: 3.426rem;
      height: 3.426rem;
    }

    div + div {
      margin-left: 1.166rem;
    }
  }


  main {
    display: flex;
    justify-content: center;
    align-items: center;

    section.team::before {
      content: "";
      width: 100%;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.28);
      left: -16.66rem;
      top: 10.33rem; 
      transform: rotate(90deg);
      position: relative;
      display: block;
      /* top: 10px; */
    }

    section.content {
      width: 611px;
      height: 198px;
      margin-right:120px;
      h1 {
        color: var(--monza);
        font-size: 24px;
        line-height: 28px;
      }

      p {
        color: var(--black-cape-cod);
        font-size: 1.06rem;
        line-height: 2.2rem;
        text-align: justify;
        margin-top: 0.33rem;
      }
    }
  }
`;
