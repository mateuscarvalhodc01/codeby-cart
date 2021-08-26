import React, { HTMLAttributes } from 'react';
import { CartIcon } from '~/assets/icons';
// STYLES
import * as S from './styles';
import * as G from '~/styles/global';

interface ICartSummary extends HTMLAttributes<HTMLDivElement> {
  numberOfProducts: number;
  totalAmount: number;
}

const CartSummary: React.FC<ICartSummary> = ({
  numberOfProducts,
  totalAmount,
  ...rest
}) => {
  return (
    <S.ExternalContainer {...rest}>
      <G.Container>
        <S.CartSummary>
          <div>
            <S.ImageContainer>
              <img src={CartIcon} alt="Cart" />
              <p>{numberOfProducts}</p>
            </S.ImageContainer>
          </div>
          <p>Ver Carrinho</p>
          <p>
            {totalAmount.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </S.CartSummary>
      </G.Container>
    </S.ExternalContainer>
  );
};

export default CartSummary;
