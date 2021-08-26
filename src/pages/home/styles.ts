import styled from 'styled-components';

export const ExternalContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Home = styled.div`
  > h2 {
    text-align: center;
    padding: 20px 0px;
    border-bottom: 1px solid #ccc;
  }
`;

interface IHome {
  cartSummaryIsVisible: boolean;
}
export const Products = styled.div<IHome>`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  padding-bottom: ${(props) =>
    props.cartSummaryIsVisible ? '100px' : 'unset'};
`;
