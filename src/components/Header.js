import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './header.css'

const Header = (props) => {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const handleToggle = () => setBurgerStatus(value => !value) 

  
  return (
    <div className='container-header h-10 fixed top-5 z-10 flex items-center justify-evenly px-10  w-full '>
      <a href="#" className="logo-header">
        <img src="../images/logo.svg" alt="logo" /></a>
        <div className="center-menu flex gap-4 font-semibold">
            <a href="#"> Model S</a>
            <a href="#"> Model X</a>
            <a href="#"> Model Y</a>
            <a href="#"> Model 3</a>
        </div>
        <div className="right-menu flex gap-4 font-semibold">
          <span className='links'><a href="#">Shop</a>
          <a href="#">Tesla Account</a></span>
          <button  onClick={()=> handleToggle()}><MenuIcon /></button>
          <div className={burgerStatus? "nav-menu open": "nav-menu"}   >
           <button onClick={()=> handleToggle()}><CloseIcon></CloseIcon></button>
           <div className="list">
           <li><a href="#">Exisiting Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-IN</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Header

