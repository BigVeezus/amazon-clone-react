import React from "react";
import './product.css'
import { useStateValue} from '../StateProvider/stateProvider'


function Product({id, title, price, rating, image}){
  //  eslint-disable-next-line
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating
            },
        });
    };

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
                        <p>⭐️</p>
                    ))}
                </div>
            </div>

            <img src={image} alt=''/>

            <button className="product-addButton" onClick={addToBasket}>Add to Basket</button>
        </div> 
    )
}

export default Product;