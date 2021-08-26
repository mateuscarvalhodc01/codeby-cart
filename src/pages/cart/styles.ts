import styled from 'styled-components';

export const ExternalContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const Home = styled.div`
  > h2 {
    text-align: center;
    padding: 20px 0px;
    border-bottom: 1px solid #ccc;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const TotalContainer = styled.div`
  padding: 30px 0px;
  margin: 10px 0px;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;

  > div {
    display: flex;
    justify-content: space-between;
  }

  > p {
    margin-top: 30px;
    background: #c7ffa6;
    color: #217a00;
    text-align: center;
    font-weight: 600;
    padding: 10px 0px;
    border-radius: 30px;
  }
`;

export const ButtonContainer = styled.div`
  > button {
    background: #3b74f2;
    color: #fff;
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 10px;
  }

  > button > img {
    height: 50px;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;

  > h3 {
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    justify-content: center;
  }

  > div > button {
    width: 100px;
    padding: 10px 0px;
    margin: 0px 10px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 5px;

    &.close {
      background: #3b74f2;
    }

    &.remove {
      background: red;
    }

    &.cancel {
      background: #aaa;
    }
  }
`;
