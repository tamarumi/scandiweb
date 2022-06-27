import React from 'react';
import { useProducts } from '../hooks/useProducts';
import "./ProductList.css";

export default function ProductList(){
    const {error, loading, data} = useProducts();

    if (loading) return <div>spinner...</div>
 
    if (error) return <div>something went wrong</div>
    
    return <div className= "ProductList"> 
     {data.category.products.map (product => {
         return <div>
             <img src={product.gallery}></img>
             <h2>{product.name}</h2>
         </div>
     })}
    </div>;
}