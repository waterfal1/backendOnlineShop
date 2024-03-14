import categoryResolver from "./category";
import currencyResolver from "./currencies";
import productResolver from "./product";

const resolvers = {
  Query: {
    category: categoryResolver,
    currencies: currencyResolver,
    product: productResolver,
  },
};

export default resolvers;
