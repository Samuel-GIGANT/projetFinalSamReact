import React from 'react';
import Product from "../../Pages/Product";

const ProductDetails = () => {
  return (
    <div>
      <h1>Product details pages</h1>
      <ul>
        <li>Sound</li>
        <li>Video</li>
        <li>Light</li> 
      </ul>
      <div>
        <Product />
      </div>
    </div>
  );
};

export default ProductDetails;
