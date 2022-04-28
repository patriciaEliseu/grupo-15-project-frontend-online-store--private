export async function getCategories() {
  const recebeAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await recebeAPI.json();
  return (categories);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const recebeAPIProdutos = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const produtos = await recebeAPIProdutos.json();
  return (produtos);
}
export async function getProductsByCategory(categoryId) {
  const fetchProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const product = await fetchProduct.json();
  return product;
}

export async function getProductsByQuery(query) {
  const fetchProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const product = await fetchProduct.json();
  return product;
}

export async function getProductsById(id) {
  const fetchProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
  const product = await fetchProduct.json();
  return product;
}
