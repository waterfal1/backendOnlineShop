import { products } from "../data";
import converter from "../util/currency-converter";

const currencyResolver = () => {
  const categories = Array.from(new Set(products.map((p) => p.getCategory())));
  return converter.availableCurrencies;
};

export default currencyResolver;
