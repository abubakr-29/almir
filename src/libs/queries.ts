export const ALL_PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    inspiredBy,   
    "image": image.asset->url,
    "category": category->{
      _id,
      title,
      "slug": slug.current,
    }
}`;

export const ALL_CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
}`;

export const FEATURED_PRODUCTS_QUERY = `*[_type == "product" 
  && featured == true][0..3] {
    _id, 
    name, 
    "slug": slug.current, 
    "image": image.asset->url, 
    inspiredBy
  }`;

export const LATEST_PRODUCTS_QUERY = `*[_type == "product"] 
  | order(_createdAt desc) [0..3] {
    _id, 
    name, 
    "slug": slug.current, 
    "image": image.asset->url, 
    inspiredBy
  }`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial" && active == true] 
| order(order asc, _createdAt desc) [0..4] {
  _id,
  name,
  quote,
  rating
}`;

export const options = { next: { revalidate: 30 } };
