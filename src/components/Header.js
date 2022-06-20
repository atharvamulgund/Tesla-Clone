import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './header.css'

const Header = () => {
  // const [burgerStatus, setBurgerStatus] = useState(false)
  return (
    <div className='container-header h-10 fixed top-5 z-10 flex items-center justify-between px-10  w-full '>
      <a href="#" className="logo-header">
        <img src="../images/logo.svg" alt="logo" /></a>
        <div className="center-menu flex gap-4 font-semibold">
            <a href="#"> Model S</a>
            <a href="#"> Model X</a>
            <a href="#"> Model Y</a>
            <a href="#"> Model 3</a>
        </div>
        <div className="right-menu flex gap-4 font-semibold">
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <button className='flex items-center'><MenuIcon/></button>
          {/* <div className="nav-menu">
           <button> <CloseIcon></CloseIcon></button>
           <div className="list">
           <li><a href="#">Exisiting Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-IN</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
           </div>
          </div> */}
        </div>
    </div>
  )
}

export default Header