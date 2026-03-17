import React, { useContext, useEffect } from "react";
import useProductsStore from './context/ProductsContext';
import Products from './Products';

export default function Product() {
    const { products, getProductData } = useProductsStore();

    useEffect(() => {
        getProductData();
    }, []);

    const productsArray = [...productsArray].reverse();

    return (
        <div className="flex justify-center gap-20 flex-wrap">
            {productsArray.map((productData, index) => (
                <Products productData={productData} key={index}/>
            ))}
        </div>
    );
}