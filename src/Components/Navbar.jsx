import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Navbar = () => {
  return (<div>
    
<div className='d-flex justify-content-center' style={{backgroundColor:'#172E4B', color:'#f3ca4c', paddingBottom:'25px', paddingTop:'25px' }}>
<nav className="d-flex align-items-center" style={{fontSize:'30px'}}>
<img src="800px-UNICAES_Logo.png" style={{ width: '60px' }} alt="Image" />                      
            <Link to="/" className="nav-link mx-2">
                Etica Social
            </Link>
            
        </nav>              
    </div>
    <Outlet/>
    {/* FOOTER*/}
    <footer className="d-flex flex-wrap footerStyle" style={{backgroundColor:'#172E4B', color:'#f3ca4c'}}>
    <div className="container d-flex" style={{marginLeft:'300px' }}>
            <div className="col-12 ">
                <div className="d-flex">                              
                <i style={{ paddingTop: '30px', paddingLeft: '45px', fontSize:'20px' }}>Hecho por:</i>
                <i style={{ paddingTop: '30px', paddingLeft: '45px', fontSize:'20px' }}>    Gabriel Rendón</i>
                <i style={{ paddingTop: '30px', paddingLeft: '45px', fontSize:'20px' }}>    Mario Arrevillaga</i>
                <i style={{ paddingTop: '30px', paddingLeft: '45px', fontSize:'20px' }}>    Liliana Cruz</i>
                <i style={{ paddingTop: '30px', paddingLeft: '45px', fontSize:'20px' }}>    Jairo Erazo</i>
                </div>                
                <p className="ms-0 ms-lg-5 text-light">                                        
                </p>
            </div>
            </div>                  
        </footer>
  </div>    
  )
}

export default Navbar