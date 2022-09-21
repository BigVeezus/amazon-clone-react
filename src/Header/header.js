import React from "react";
import './header.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className="header">
        <div className='header-logo'>
        <StorefrontIcon className='header-logoImage' fontSize='large'/>
        <h2 className="header-logoTitle">Vizu Store</h2>
      </div>
      <div className="header-search">
        <input type="text" className='header-searchInput' placeholder="Search item..."/>
        <SearchIcon className="header-searchIcon"/>
      </div>
      <div className="header-nav">
        <div className="nav-item">
          <span className="nav-itemLineOne">Hello Guest</span>
          <span className="nav-itemLineTwo">Sign In</span>
      </div>
      <div className="nav-item">
         <span className="nav-itemLineOne">Your</span>
         <span className="nav-itemLineTwo">Shop</span>
      </div>
      <div className="nav-itemBasket">
          <ShoppingBagIcon fontSize="large" className="itemBasket"/>
          <span className="nav-itemLineTwo nav-basketCount">0</span>
      </div>
      </div>
  
        
        </div>
    )
}

export default Header;