import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 60px;
  height: 60px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  bottom: 19px;
`;
