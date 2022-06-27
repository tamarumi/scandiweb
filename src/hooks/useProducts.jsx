import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
query {
  categories {
    name
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }   
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
}

   `;

export const useProducts = () => {
    const {error, loading, data} = useQuery(GET_PRODUCTS);

    return {
        error, 
        loading,
        data
    }
}