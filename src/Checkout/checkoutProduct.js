import React from "react";
import './checkoutProduct.css'

function CheckoutProduct({id, title, image, price, rating}){
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct-image" />

            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">
                {title}
                </p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>⭐️</p>
                    ))}
                </div>
                <button>Remove from Basket</button>
            </div>
        </div> 
    )
}

export default CheckoutProduct;