import React, { HTMLAttributes } from 'react';
// MODELS
import ProductModel from '~/models/product';
// STYLES
import * as S from './styles';

interface IProduct extends ProductModel, HTMLAttributes<HTMLDivElement> {
  id: string;
}

const productCard: React.FC<IProduct> = ({
  name,
  brandName,
  imageUrl,
  price,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.ImageContainer>
        <img src={imageUrl} alt="Product" />
      </S.ImageContainer>
      <S.ContentContainer>
        <h4>{name}</h4>
        <p className="brand">{brandName}</p>
        <p className="price">
          {price.toLocaleString('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </S.ContentContainer>
    </S.Container>
  );
};

export default productCard;
