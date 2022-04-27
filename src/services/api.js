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
