import React from 'react'

const Contacto = () => {
  return (
    <div style={{backgroundColor:'#E8E5E5'}}>
<div className="container d-flex" style={{color: '#F081B4' }}>
        <div className="col-6">
          <br></br>
          <br></br>
          <h1 className="mt-5 " style={{  color: '#101010', fontSize:'50px', fontFamily:'EB Garamond'  }}> PORQUE CENICIENTA TAMBIÉN<br />NECESITÓ AYUDA</h1>
          <p style={{  color: '#fa7f77', fontSize:'40px' , fontFamily:'Allura',marginLeft:'10px' }}>Contáctanos para asesorarte</p>
          <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Escribe tu correo aquí"
                aria-label="Escribe tu correo aquí"
                aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2 " style={{backgroundColor:'#fa7f77', color:'#101010'}}>Escríbenos</span>
        </div>
        </div>   
        <div className="container d-flex" style={{  color: '#fa7f77' }}>
        </div> 
      <img src="vestido.jpg" style={{  width: '350px', borderradius:'90%',marginTop:'50px',marginRight:'100px' }} alt="Image" />        
      </div>
        
    </div>
    
  )
}

export default Contacto