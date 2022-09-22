import React from "react";
import './product.css'

function Product({id, title, price, rating, image}){
    return ( 
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>&#11088;</p>
                    ))}
                </div>
            </div>

            <img src={image} alt=''/>

            <button>Add to Basket</button>
        </div> 
    )
}

export default Product;