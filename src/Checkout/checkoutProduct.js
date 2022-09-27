import React from "react";
import './checkoutProduct.css'
import { useStateValue} from '../StateProvider/stateProvider'


function CheckoutProduct({id, title, image, price, rating}){
   // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    };

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
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div> 
    )
}

export default CheckoutProduct;