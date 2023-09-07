
import { Link } from "react-router-dom"; // Link est un composant qui permet de créer des liens entre les pages
import fakeProducts from "../fakeProducts";
import fakeProductsData from "../fakeProducts";
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

const ProductList = ({ products, fetchProducts }) => {
  useEffect(() => {
    // Chargez les produits à partir du store Redux lors du montage du composant
    fetchProducts(fakeProductsData);
  }, [fetchProducts]);


  return(
            <>
                <h1>Produits</h1>
                <ul className="listProducts">
                    {fakeProducts.map((product) => (
                        <li className="theProduct" key={product.id}>
                            <Link to={`/produits/${product.id}`}>{product.name}</Link>
                        </li>
                    ))}
                </ul>
            </>
        
        
        )
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
