import { Asset, Entry } from 'contentful';

/**
 * This model represents our Blog Post content type in Contentful and
 * the expected response type from their API. Each property
 * in this model corresponds to a "name" of a field in our Blog Post
 * content type.
 */
export interface BlogPost {
  title: string;
  slug: string;
  body: any;
  description: string;
  featuredImage: Asset;
  readTime: number;
  author: Entry<Author>;
  recipe?: Entry<Recipe>;
}

export interface Author {
  name: string;
  bio: string;
  image: Asset;
}

export interface Recipe {
  ingredients: Entry<Ingredient>[];
  servings: string;
  steps: any;
  time: string;
  title: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  alt: string;
}
