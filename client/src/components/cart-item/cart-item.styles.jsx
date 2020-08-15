import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 20px;
`;

export const CartItemImage = styled.img`
  width: 35%;
`;

export const ItemDetailsContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5px;
`;

export const DetailsStyles = styled.span`
  font-size: 25px;
  font-weight: 550;
`;
