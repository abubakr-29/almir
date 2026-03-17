export interface SanityProduct {
  _id: string;
  name: string;
  inspiredBy: string;
  image: string;
  category: {
    _id: string;
    title: string;
    slug: string;
  };
}

export interface Product {
  id: string;
  name: string;
  inspiredBy: string;
  image: string;
  category: string;
}

export const ALL_TAB = "All" as const;
export type FilterTab = typeof ALL_TAB | string;
