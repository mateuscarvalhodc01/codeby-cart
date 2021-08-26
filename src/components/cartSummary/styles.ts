import styled from 'styled-components';

export const ExternalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  background-color: #217a00;
  cursor: pointer;
`;

export const CartSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  > div {
    display: flex;
  }

  > div,
  p {
    flex: 1;
  }

  > p:first-of-type {
    text-align: center;
  }

  > p:last-of-type {
    text-align: right;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  > img {
    width: 40px;
    height: auto;
  }

  > p {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    right: -5px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    font-size: 1rem;
    color: green;
  }
`;
