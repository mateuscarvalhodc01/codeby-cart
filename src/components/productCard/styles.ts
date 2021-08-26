import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  cursor: pointer;
  transition: 0.3s;

  &.onCart {
    background: #eee;
  }

  @media (min-width: 768px) {
    :hover {
      background: #eee;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 0.4;
  border: 1px solid #aaa;
  padding: 0px 20px;
  margin-right: 20px;

  > img {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex: 0.1;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;

  > p.brand {
    color: #aaa;
    margin-bottom: 10px;
  }

  > p.price {
    font-weight: 600;
  }
`;
