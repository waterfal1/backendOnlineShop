import converter from "../util/currency-converter";

const currencyResolver = () => {
  return converter.availableCurrencies;
};

export default currencyResolver;
