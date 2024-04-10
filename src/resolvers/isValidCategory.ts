import { products } from "../data";
import { Category } from "../data/type";

type Args = {
  input?: {
    title: Category;
  };
};

const isValidCategoryResolver = (_parent: any, args: Args) => {
  const { input: { title } = {} } = args;

  if (title) {
    const categories = Array.from(
      new Set(products.map((p) => p.getCategory()))
    );
    return { isValidCategory: categories.includes(title) };
  }

  return { isValidCategory: false };
};

export default isValidCategoryResolver;
