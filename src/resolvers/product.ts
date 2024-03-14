import { products } from "../data";

type Args = {
  input?: {
    id: string;
  };
};

const productResolver = (_parent: any, args: Args) => {
  const { input: { id } = {} } = args;

  const result = id
    ? products
        // .filter((product) => product.getCategory() === title)
        .find((p) => p.getId() === id)
    : null;

  if (!result) {
    return null;
  }

  return {
    product: result,
  };
};

export default productResolver;
