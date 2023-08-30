import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Navbar = () => {
  return (<div>
    
<div className='d-flex justify-content-center' style={{backgroundColor:'#f2dad5 ', color:'#101010', paddingBottom:'25px', paddingTop:'25px' }}>
<nav className="d-flex align-items-center">
            <img src="logo.png" style={{ width: '60px' }} alt="Image" />
            <Link to="/" className="nav-link mx-2">
                DressWithElegance
            </Link>
            <Link to="/Nosotros" className="nav-link mx-2">
                About Us
            </Link>
            <Link to="/Contacto" className="nav-link mx-2">
                Contacto
            </Link>
        </nav>              
    </div>
    <Outlet/>
    {/* FOOTER*/}
    <footer className="d-flex flex-wrap footerStyle">
            <div className="col-12 col-lg-6">
            <h1 style={{ paddingTop: '30px', paddingLeft: '90px' }}>DRESS WITH ELEGANCE</h1>
                <p style={{ paddingTop: '30px', paddingLeft: '90px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore
                    eaque id fuga harum nisi dolorum maxime debitis quod excepturi sint
                    quas mollitia ex enim sed inventore, praesentium aliquid cum.
                </p>
                <p>
                    <i className="bi bi-c-circle" style={{ paddingLeft: '90px' }}></i> 2025 Mobirise. All rights reserved.
                </p>
                
            </div>
            <div className="col-8 col-lg-3 mt-4">
                <div className="d-flex">
                <i style={{ paddingTop: '30px', paddingLeft: '40px' }}>Diseñado por:</i> <br />                
                <i style={{ paddingTop: '30px', paddingLeft: '10px' }}>Gabriel Alejandro Rendón Alas</i>
                </div>
                <h4 className="ms-0 ms-lg-5 mt-3" >SUBSCRIBE FOR UPDATES</h4>
                <p className="ms-0 ms-lg-5 text-light">
                    <a href="mailto:email@example.com" className="text-dark">test@example.com</a>
                    <i className="bi bi-arrow-right ms-2 text-light"></i>
                </p>
            </div>
            <div className="col-6 col-lg-3 mt-5">
                <ul className="social-icons ms-0 ms-lg-5" style={{ color: 'white', textDecoration: 'none', cursor: 'default' }}>
                    <li style={{ listStyle: 'none' }}>
                        <a href="#"><i className="bi bi-facebook text-light"></i></a>
                    </li>
                    <li style={{ listStyle: 'none' }}>
                        <a href="#"><i className="bi bi-twitter text-light"></i></a>
                    </li>
                    <li style={{ listStyle: 'none' }}>
                        <a href="#"><i className="bi bi-vimeo text-light"></i></a>
                    </li>
                    <li style={{ listStyle: 'none' }}>
                        <a href="#"><i className="bi bi-skype text-light"></i></a>
                    </li>
                </ul>
            </div>
        </footer>
  </div>    
  )
}

export default Navbar