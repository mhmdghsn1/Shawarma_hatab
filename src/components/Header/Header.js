import React from 'react';
import './Header.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Ico from '../images/bgd.ico'
import NavItem ,{NavItemDropDown} from '../NavItem/NavItem'



const Header = () => {
  return (
    <div id="mainNavigation" >
      <nav role="navigation">
        <div className="navbar-expand-md">
          <div className="navbar-dark text-center my-2">
            <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
            </button>
          </div>
          <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
            <div className="icon-container">
              <img src={Ico} alt="background" />
            </div>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="mainNavigation">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Location</a>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="https://wa.me/9613647357">Order Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;