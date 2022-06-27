import { useQuery, gql } from "@apollo/client"

const GET_PRODUCT = gql`
query {
  categories ($id: String!) {
    name
    products (id: $id) {
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

  export const useProductPage = (id) => {
       const {data, error, loading} = useQuery(GET_PRODUCT, 
       {variables: {
          id,
       },
    });
    return {
        data,
        error, 
        loading
    }
   }