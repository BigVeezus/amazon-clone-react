import React from "react";
import './header.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider/stateProvider'

function Header() {

 //  eslint-disable-next-line
    const [{basket}, dispatch ] = useStateValue();

    return (
    <div className="header">

        <Link to='/' style={{ textDecoration: "none"}}>
          <div className='header-logo'>
            <StorefrontIcon className='header-logoImage' fontSize='large'/>
            <h2 className="header-logoTitle">Vizu Store</h2>
          </div>
        </Link>

      <div className="header-search">
        <input type="text" className='header-searchInput' placeholder="Search item..."/>
        <SearchIcon className="header-searchIcon"/>
      </div>
      <div className="header-nav">

        <Link to='/login' style={{ textDecoration: "none"}}>
        <div className="nav-item">
          <span className="nav-itemLineOne">Hello Guest</span>
          <span className="nav-itemLineTwo">Sign In</span>
      </div>
        </Link> 
        
      <div className="nav-item">
         <span className="nav-itemLineOne">Your</span>
         <span className="nav-itemLineTwo">Shop</span>
      </div>

      <Link to="/checkout" style={{ textDecoration: "none"}}>
        <div className="nav-itemBasket">
          <ShoppingBagIcon fontSize="large" className="itemBasket"/>
          <span className="nav-itemLineTwo nav-basketCount">{basket.length}</span>
        </div>
      </Link>


      </div>
  
        
        </div>
    )
}

export default Header;