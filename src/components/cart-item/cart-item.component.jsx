import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  DetailsStyles,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <DetailsStyles>{name}</DetailsStyles>
      <DetailsStyles>
        {quantity} x ${price}
      </DetailsStyles>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
