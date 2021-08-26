import React, { useEffect, useState } from 'react';
// HOOKS
import { useHistory } from 'react-router-dom';
import { useCart } from '~/hooks/cart';
// COMPONENTS
import ProductCard from '~/components/productCard';
import CartSummary from '~/components/cartSummary';
// STYLES
import * as S from './styles';
import * as G from '~/styles/global';
// JSON
import ProductsJson from '~/utils/products/over.json';
// MODELS
import IProduct from '~/models/product';

const Home: React.FC = () => {
  const { cart, setCart } = useCart();
  const history = useHistory();

  const [cartItems, setCartItems] = useState<IProduct[]>(cart);

  const addToCart = (product: IProduct, elementIndex: number): void => {
    const alreadyInCart = cartItems.map((item) => item.id).includes(product.id);
    const products = document.querySelectorAll('#products > div');

    if (alreadyInCart) {
      const productIndex = cartItems.map((item) => item.id).indexOf(product.id);
      cartItems.splice(productIndex, 1);
      const newCart = [...cartItems];
      products[elementIndex].classList.remove('onCart');
      return setCartItems(newCart);
    }

    const newCart = [...cartItems, product];
    return setCartItems(newCart);
  };

  useEffect(() => {
    setCart(cartItems);

    const products = document.querySelectorAll('#products > div');
    /**
     * Método para manter a estilização dos produtos selecionados
     * mesmo que o usuário dê um refresh na página, ou esteja na
     * página de carrinho e volte para esta página home.
     */
    ProductsJson.items
      .map((el) => el.id)
      .forEach((productId, index) => {
        cartItems
          .map((el) => el.id)
          .forEach((productInCartId) => {
            if (productId === productInCartId) {
              products[index].classList.add('onCart');
            }
          });
      });
  }, [cartItems, setCart]);

  return (
    <S.ExternalContainer>
      <G.Container>
        <S.Home>
          <h2>Escolha os itens para adicionar ao carrinho</h2>
          <S.Products cartSummaryIsVisible={cartItems.length > 0} id="products">
            {ProductsJson.items.map((product: IProduct, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                brandName={product.additionalInfo?.brandName}
                imageUrl={product.imageUrl}
                price={product.price}
                onClick={() => addToCart(product, index)}
              />
            ))}
          </S.Products>
          {cartItems.length > 0 ? (
            <CartSummary
              numberOfProducts={cartItems.length}
              totalAmount={cartItems
                .map((item) => item.price)
                .reduce((a, b) => a + b)}
              onClick={() => history.push('/cart')}
            />
          ) : null}
        </S.Home>
      </G.Container>
    </S.ExternalContainer>
  );
};

export default Home;
