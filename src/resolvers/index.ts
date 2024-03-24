import categoryResolver from "./category";
import currencyResolver from "./currencies";
import productResolver from "./product";
import isValidCategoryResolver from "./isValidCategory";
import isValidProductIdResolver from "./isValidProductId";

const resolvers = {
  Query: {
    category: categoryResolver,
    currencies: currencyResolver,
    product: productResolver,
    isValidCategory: isValidCategoryResolver,
    isValidProductId: isValidProductIdResolver,
  },
};

export default resolvers;
