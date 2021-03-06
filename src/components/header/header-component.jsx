import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils"

import "./header-component.style.scss";
// import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { ReactComponent as Logo } from "../../assets/AE01.png";
import { ReactComponent as Logo } from "../../assets/AELogo.svg";

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='options' to='/shop'>
        SHOP
      </Link>
      <Link className='options' to='/contact'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;
