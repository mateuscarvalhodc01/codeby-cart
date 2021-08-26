import React, { useState } from 'react';
// HOOKS
import { useHistory } from 'react-router-dom';
import { useCart } from '~/hooks/cart';
import ModalComponent from '~/components/modal';
import { SpinnerGif } from '~/assets/gifs';
// COMPONENTS
import ProductCard from '~/components/productCard';
// STYLES
import * as S from './styles';
import * as G from '~/styles/global';
// MODELS
import IProduct from '~/models/product';

interface IModalProduct {
  id: string;
  index: number;
}

const Cart: React.FC = () => {
  const history = useHistory();

  // CART ITEMS
  const { cart, setCart } = useCart();
  const [cartItems, setCartItems] = useState<IProduct[]>(cart);

  // MODAL STATES
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalProduct, setModalProduct] = useState<IModalProduct | null>(null);
  const [modalText, setModalText] = useState<string>('');
  const [modalType, setModalType] = useState<
    'paymentSuccess' | 'removeProduct'
  >();

  // BUTTON LOADING STATE
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addToCart = (product: IProduct, elementIndex: number): void => {
    const alreadyInCart = cartItems.map((item) => item.id).includes(product.id);
    const products = document.querySelectorAll('#products > div');

    if (alreadyInCart) {
      setModalType('removeProduct');
      setModalProduct({ id: product.id, index: elementIndex });
      setModalText('Deseja remover este item do carrinho?');
      return setShowModal(true);
    }

    products[elementIndex].classList.add('onCart');
    const newCart = [...cartItems, product];
    return setCartItems(newCart);
  };

  const removeFromCart = () => {
    if (modalProduct) {
      const products = document.querySelectorAll('#products > div');
      const productIndex = cartItems
        .map((item) => item.id)
        .indexOf(modalProduct.id);
      cartItems.splice(productIndex, 1);
      const newCart = [...cartItems];
      products[modalProduct.index].classList.remove('onCart');
      setModalProduct(null);
      setCartItems(newCart);
      return setShowModal(false);
    }
    return false;
  };

  const checkout = () => {
    setIsLoading(true);

    // PAYMENT REQUEST SIMULATION
    setTimeout(() => {
      setIsLoading(false);
      setModalText('Pagamento realizado com sucesso.');
      setModalType('paymentSuccess');
      setShowModal(true);
    }, 3000);
  };

  return (
    <>
      <S.ExternalContainer>
        <G.Container>
          <S.Home>
            <h2>Meu carrinho</h2>
            <S.Products id="products">
              {cartItems.map((product: IProduct, index) => (
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
            <S.TotalContainer>
              <div>
                <h3>Total</h3>
                <h3>
                  {cartItems
                    .map((item) => item.price)
                    .reduce((a, b) => a + b, 0)
                    .toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                </h3>
              </div>
              {cartItems.map((item) => item.price).reduce((a, b) => a + b, 0) >
              1000 ? (
                <p>Parabéns, sua compra tem frete grátis !</p>
              ) : null}
            </S.TotalContainer>
            <S.ButtonContainer>
              <button type="button" onClick={checkout}>
                {isLoading ? (
                  <img src={SpinnerGif} alt="spinner" />
                ) : (
                  'Finalizar compra'
                )}
              </button>
            </S.ButtonContainer>
          </S.Home>
        </G.Container>
      </S.ExternalContainer>
      {showModal ? (
        <ModalComponent
          dismissModal={() => {
            setShowModal(false);
            if (modalType === 'paymentSuccess') {
              setCart([]);
              history.push('/');
            }
          }}
        >
          <S.ModalContainer>
            <h3>{modalText}</h3>
            {modalType === 'paymentSuccess' ? (
              <div>
                <button
                  className="close"
                  type="button"
                  onClick={() => {
                    setCart([]);
                    setShowModal(false);
                    history.push('/');
                  }}
                >
                  Fechar
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="remove"
                  type="button"
                  onClick={removeFromCart}
                >
                  Remover
                </button>
                <button
                  className="cancel"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
              </div>
            )}
          </S.ModalContainer>
        </ModalComponent>
      ) : null}
    </>
  );
};

export default Cart;
