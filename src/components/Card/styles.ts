import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(196, 196, 196, 0.18);
  border-radius: 0.3rem;
  width: 12.17rem;
  height: 15.07rem;
  padding: 0.367rem 0.49rem;
  position: relative;

  img {
    border-radius: 0.61rem;
  }

  span {
    line-height: 18px;
    font-weight: 500;
    font-size: 0.978rem;
    margin-left: 0.43rem;
  }


  div.contentCard {
    display: flex;
    align-items: center;
    margin-top: 1.026rem;

    div.year {
      width: 56.59px;
      height: 17.97px;
      
      border-radius: 17.9665px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 10.7799px;
      line-height: 13px;
      color: #FFFFFF;
    }
  }
`;
