import styled from 'styled-components';

export const Container = styled.div`
  max-width: 78.8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6667rem 0;

  @media (max-width: 945px) {
    max-width: 48rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span { 
      font-size: 0.934rem;
      line-height: 1.134rem;
      color: rgba(57, 58, 58, 0.7);
    }
  }

  div + div {
    margin-left: 1.8rem;
  }
`;

export const ActionUser = styled.div`
  position: relative;
  div.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    
    img {
      border-radius: 50%;
    }
    span {
      margin-top: 2px;
    }
  }

  div.menu::before {
    content: "";
    display: block;
    position: absolute;
    top: -1.6rem;
    right: 1rem;
    border-color: transparent transparent #FCDBCF;
    border-style: solid;
    border-width: 0.8rem;
  }

  div.menu {
    position: absolute;
    top: 5.3333rem;
    right: -1rem;
    padding: 0.6667rem 1.3333rem;
    background-color: #FEF5F2;
    width: 13.3333rem;
    box-sizing: 0 0.3333rem 1.6667rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    transition: 0.5s;
    visibility: hidden;
    opacity: 0;
    border: 0.0667rem solid #FCDBCF;

    h3 {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.4667rem;
      color: #393A3A;
      margin-bottom: 0.333rem;
    }

    ul li {
      padding: 10px 0;
      display: flex;
      align-items: center;
      
      &:hover {
        svg {
          opacity: 1;
        }
        a {
          color: #F3784B;
        }
      }

      svg {
        margin-right: 0.6667rem;
        opacity: 0.5;
        transition: 0.5s;
      }

      a {
        font-weight: 300;
        font-size: 1.0667rem;
        line-height: 1.2667rem;
        color: #393A3A;
        transition: 0.5s;
      }
    }

    ul li + li {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  div.active {
    visibility: visible;
    opacity: 1;
  }
`;