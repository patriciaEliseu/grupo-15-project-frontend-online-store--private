export async function getCategories() {
  // Implemente aqui
  const recebeAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await recebeAPI.json();
  return (categories);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função receb
  const recebeAPIProdutos = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const produtos = await recebeAPIProdutos.json();
  return (produtos);
}
