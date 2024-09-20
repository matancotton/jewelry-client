import { gql } from '@apollo/client';

export const GET_JEWELRY = gql`
  query GetJewelry($_id: ID, $shape: String, $isLabDiamond: Boolean, $price: Int) {
    jewelries(_id: $_id, shape: $shape, isLabDiamond: $isLabDiamond, price: $price) {
      _id
      price
      shape
      color
      clarity
      carat
      isLabDiamond
      cut
    }
  }
`;
