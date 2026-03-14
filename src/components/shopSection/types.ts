export const PRODUCT_CATEGORIES = [
  "Oud",
  "Floral",
  "Citrus",
  "Woody",
  "Fresh",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  category: ProductCategory;
}
