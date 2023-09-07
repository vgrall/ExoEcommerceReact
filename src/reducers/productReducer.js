// reducers/productReducer.js

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload, // Mettez à jour la liste des produits
      };
    default:
      return state;
  }
};

export default productReducer;
