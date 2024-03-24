import { products } from "../data";

type Args = {
  input?: {
    id: string;
  };
};

const isValidProductIdResolver = (_parent: any, args: Args) => {
  const { input: { id } = {} } = args;

  if (id) {
    return { isValidProductId: !!products.find((p) => p.getId() === id) };
  }

  return { isValidProductId: false };
};

export default isValidProductIdResolver;
