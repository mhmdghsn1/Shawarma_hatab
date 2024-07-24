import React from 'react';
import './Menu.css';
import wj1 from '../images/wj1.jpg';
import flt from '../images/flt.jpg';
import wj2 from '../images/wj2.jpg';
import san from '../images/san.jpg';
import san1 from '../images/san1.jpg';

function Menu() {
  return (
    <div className='Menu-main' id='Menu-main'>
      <ul className='nav nav-tabs d-flex justify-content-center aos-init aos-animate' data-aos='fade-up' data-aos-delay='100' role='tablist'>
        <li className='nav-item' role='presentation'>
          <a className='nav-link show' data-bs-toggle='tab' href='#menu-starters'>
            <h5>Sandwiches</h5>
          </a>
        </li>
        <li className='nav-item' role='presentation'>
          <a className='nav-link show' data-bs-toggle='tab' href='#menu-main-courses'>
            <h5>Meal</h5>
          </a>
        </li>
        <li className='nav-item' role='presentation'>
          <a className='nav-link show' data-bs-toggle='tab' href='#menu-desserts'>
            <h5>Desserts</h5>
          </a>
        </li>
      </ul>
      <div className='tab-content aos-init aos-animate' data-aos='fade-up' data-aos-delay='200'>
        <div className='tab-pane fade' id='menu-starters' role='tabpanel'>
          <div className='tab-header text-center'>
            <p>Menu</p>
            <h3>Starters</h3>
          </div>   
          <div className="row gy-5">
            <div className="col-lg-4 menu-item">
              <a href="../images/bg1.jpg" className="glightbox">
                <img src={wj1} className="menu-img img-fluid" alt="photo"/>
              </a>
              <h4>Regular meal</h4>
              <p className="ingredients">
                One sandwich, garlic, chilli, pickles, fries
              </p>
              <p className="price">
                L.L 350,000
              </p>
            </div>
            <div className="col-lg-4 menu-item">
              <a href="../images/bg1.jpg" className="glightbox">
                <img src={wj2} className="menu-img img-fluid" alt=""/>
              </a>
              <h4>Double meal</h4>
              <p className="ingredients">
                two sandwiches, garlic, chilli, pickles, box fries
              </p>
              <p className="price">
                L.L 500,000
              </p>
            </div>
            <div className="col-lg-4 menu-item">
              <a href="../images/bg1.jpg" className="glightbox">
                <img src={san} className="menu-img img-fluid" alt=""/>
              </a>
              <h4>Large sandwich</h4>
              <p className="ingredients">
                garlic, pickles,  fries
              </p>
              <p className="price">
                L.L 250,000
              </p>
            </div>
            <div className="col-lg-4 menu-item">
              <a href="../images/bg1.jpg" className="glightbox">
                <img src={san1} className="menu-img img-fluid" alt=""/>
              </a>
              <h4>Medium sandwich</h4>
              <p className="ingredients">
                garlic, pickles,  fries
              </p>
              <p className="price">
                L.L 250,000
              </p>
            </div>
          </div>
        </div>
        <div className='tab-pane fade' id='menu-main-courses' role='tabpanel'>
          <div className='tab-header text-center'>
            <p>Menu</p>
            <h3>Main Courses</h3>
          </div>   
          <div className='row gy-5'>
          <div className="col-lg-4 menu-item">
              <a href="../images/bg1.jpg" className="glightbox">
                <img src={flt} className="menu-img img-fluid" alt=""/>
              </a>
              <h4>Half a kilo of shawarma</h4>
              <p className="ingredients">
                garlic, chilli, pickles, box fries
              </p>
              <p className="price">
                L.L 900,000
              </p>
            </div>
            <div className="col-lg-4 menu-item">
              <a href="../images/bg1.jpg" className="glightbox">
                <img src={flt} className="menu-img img-fluid" alt=""/>
              </a>
              <h4>kilo of shawarma</h4>
              <p className="ingredients">
                garlic, chilli, pickles, box fries
              </p>
              <p className="price">
                L.L 1,800,000
              </p>
            </div>
          </div>
        </div>
        <div className='tab-pane fade' id='menu-desserts' role='tabpanel'>
          <div className='tab-header text-center'>
            <p>Menu</p>
            <h3>Desserts</h3>
          </div>   
          <div className='row gy-5'>
          <div className="col-lg-4 menu-item">
              <a href="../images/bg1.jpg" className="glightbox">
                <img src={flt} className="menu-img img-fluid" alt=""/>
              </a>
              <h4>Half a kilo of shawarma</h4>
              <p className="ingredients">
                garlic, chilli, pickles, box fries
              </p>
              <p className="price">
                L.L 900,000
              </p>
            </div>
            <div className="col-lg-4 menu-item">
              <a href="../images/bg1.jpg" className="glightbox">
                <img src={flt} className="menu-img img-fluid" alt=""/>
              </a>
              <h4>kilo of shawarma</h4>
              <p className="ingredients">
                garlic, chilli, pickles, box fries
              </p>
              <p className="price">
                L.L 1,800,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
