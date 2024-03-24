import { gql } from "apollo-server";

const typeDefs = gql`
  type Price {
    currency: String!
    amount: Float!
  }

  type Attribute {
    displayValue: String
    value: String
    id: String!
  }

  type AttributeSet {
    id: String!
    name: String
    type: String
    items: [Attribute]
  }

  type Product {
    id: String!
    name: String!
    inStock: Boolean
    gallery: [String]
    description: String!
    category: String!
    attributes: [AttributeSet]
    prices: [Price!]!
  }

  type Category {
    name: String
    products: [Product]!
  }

  input CategoryInput {
    title: String!
  }

  type SingleProduct {
    product: Product
  }

  input ProductInput {
    id: String!
  }

  type IsValidCategory {
    isValidCategory: Boolean
  }

  type IsValidProductId {
    isValidProductId: Boolean
  }

  type Query {
    category(input: CategoryInput): Category
    currencies: [String]
    isValidCategory(input: CategoryInput): IsValidCategory
    isValidProductId(input: ProductInput): IsValidProductId
    product(input: ProductInput): SingleProduct
  }
`;

export default typeDefs;
