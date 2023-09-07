export const fetchProducts = (data) => {
  // Ici, vous pouvez appeler une API ou importer vos données de produits
  const products = data;

  return {
    type: "FETCH_PRODUCTS",
    payload: products, // Les produits récupérés vont ici
  };
};
