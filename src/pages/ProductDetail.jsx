import React from "react";
import { useParams } from "react-router-dom"; // useParams est un hook qui permet de récupérer les paramètres de l'URL
import { useSelector } from "react-redux";



const ProductDetail = () => {
  const products = useSelector((state) => state.products);  
  const { id } = useParams(); 
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Produit non trouvé.</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p className="produit">{product.description}</p>
      <p className="produit">Prix : {product.price} €</p>
      <p className="produit">Marque : {product.marque}</p>
    </div>
  );
};

export default ProductDetail;
