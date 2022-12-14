import React from 'react'
import './checkout.css'
import CheckoutProduct from './checkoutProduct';
import Subtotal from '../Subtotal/subtotal';
import { useStateValue } from '../StateProvider/stateProvider'


function Checkout() {
 // eslint-disable-next-line
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkout-left">
        <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' className='checkout-ad'/>
        <div>
          <h2 className='checkout-title'>Your Shopping Basket</h2>
         {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
         ))}
        </div>
        </div>
      <div className="checkout-right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout;