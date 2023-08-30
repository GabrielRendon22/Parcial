import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import '../../src/index.css'


const Index = () => {
  return (
    
   <div style={{backgroundColor:'#E8E5E5', paddingBottom:'50px'}}>   
      <div className="container d-flex" style={{color: '#F081B4' }}>
        <div className="col-6">
          <br></br>
          <br></br>
          <h1 className="mt-5 " style={{  color: '#101010', fontSize:'90px', fontFamily:'EB Garamond'  }}>DRESS WITH<br />ELEGANCE</h1>
          <p style={{  color: '#fa7f77', fontSize:'40px' , fontFamily:'Allura',marginLeft:'100px' }}>Tu Estilo, Tu Distinción</p>
        </div>   
        <div className="container d-flex" style={{  color: '#fa7f77' }}>
        </div> 
      <img src="1.webp" style={{  width: '350px', borderradius:'90%',marginTop:'50px',marginRight:'100px' }} alt="Image" />        
      </div>
      {/* VESTIDOS DE BODA*/}
      <h1 className="mt-5" style={{ textAlign: 'center', color: '#fa7f77',fontFamily:'Allura',fontSize:'60px' }}>Vestidos de Boda</h1>
      <div className="container d-flex mt-5">
        <div className="card-group">
          {/* CARD 1 BODA*/}
          <div className="card mx-4 border-0 CardsBoda"  style={{ color: '#101010', border:'black',backgroundColor:' #F8E2DD' }}>
            <i className="bi bi-coin mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body ">            
              <img src="boda1.jpg" style={{  width: '210px', height:'400px', borderradius:'90%',marginTop:'5px',marginBottom:'5px',marginLeft:'-25px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'10px'}}>Boho Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 2546</p>
            </div>
          </div>
          {/* CARD 2 BODA*/}
          <div className="card mx-4 border-0 CardsBoda" style={{ color: '#101010',backgroundColor:' #F8E2DD' }}>
            <i className="bi bi-palette mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body">
              <h4 className="card-title"></h4>                        
              <img src="boda2.jpg" style={{  width: '200px', height:'390px', borderradius:'90%',marginTop:'10px',marginBottom:'15px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'5px'}}>Glam Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 2548</p>
            </div>
          </div>
          {/* CARD 3 BODA*/}
          <div className="card mx-4 border-0 CardsBoda" style={{color: '#101010',backgroundColor:' #F8E2DD' }}>
            <i className="bi bi-image mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body">
              <h4 className="card-title"></h4>                  
              <img src="boda3.jpg" style={{  width: '200px', height:'400px', borderradius:'90%',marginTop:'10px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Lace Dreams Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 2516</p>
            </div>
          </div>
          {/* CARD 4 BODA*/}
          <div className="card mx-4 border-0 CardsBoda" style={{ color: '#101010',backgroundColor:' #F8E2DD' }}>
            <i className="bi bi-rocket mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body">
              <h4 className="card-title"></h4>              
              <img src="boda4.jpg" style={{ width: '200px', height:'400px', borderradius:'90%',marginTop:'10px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Tales of Silk Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 2593</p>
            </div>
          </div>        
        </div>
      </div>   
        {/* VESTIDOS DE NOCHE*/}
        <h1 className="mt-5" style={{ textAlign: 'center', color: '#fa7f77',fontFamily:'Allura',fontSize:'60px' }}>Vestidos de Noche</h1>
      <div className="container d-flex mt-5">
        <div className="card-group">
          {/* CARD 1 NOCHE*/}
          <div className="card mx-4 border-0 CardsNoche"  style={{ color: '#101010', border:'black' }}>
            <i className="bi bi-coin mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body ">              
              <img src="noche1.jpg" style={{  width: '200px', height:'350px', borderradius:'90%',marginTop:'20px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Dark Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 93</p>
            </div>
          </div>
          {/* CARD 2 NOCHE*/}
          <div className="card mx-4 border-0 CardsNoche" style={{ color: '#101010' }}>
            <i className="bi bi-palette mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body">
              <h4 className="card-title"></h4>                        
              <img src="noche2.jpg" style={{  width: '200px', height:'350px', borderradius:'90%',marginTop:'20px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Midnight Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 53</p>
            </div>
          </div>
          {/* CARD 3 NOCHE*/}
          <div className="card mx-4 border-0 CardsNoche" style={{color: '#101010' }}>
            <i className="bi bi-image mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body">
              <h4 className="card-title"></h4>                  
              <img src="noche3.jpg" style={{  width: '200px', height:'350px', borderradius:'90%',marginTop:'20px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Secret Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 59</p>
            </div>
          </div>
          {/* CARD 4 NOCHE*/}
          <div className="card mx-4 border-0 CardsNoche" style={{ color: '#101010' }}>
            <i className="bi bi-rocket mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body">
              <h4 className="card-title"></h4>              
              <img src="noche4.jpg" style={{ width: '200px', height:'350px', borderradius:'90%',marginTop:'20px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Sensuality Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 92</p>
            </div>
          </div>        
        </div>
      </div>  
      {/* VESTIDOS DE QUINCEAÑOS*/}
      <h1 className="mt-5" style={{ textAlign: 'center', color: '#fa7f77',fontFamily:'Allura',fontSize:'60px' }}>Vestidos de Quinceañera</h1>
      <div className="container d-flex mt-5" style={{ backgroundColor:'#E8E5E5'}}>
        <div className="card-group">
          {/* CARD 1 XV*/}
          <div className="card mx-4 border-0 CardsXV"  style={{ color: '#101010', border:'black' }}>
            <i className="bi bi-coin mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body style ">              
              <img src="XV1.jpg" style={{  marginLeft:'-10px' ,width: '200px', height:'375px', borderradius:'90%',marginTop:'10px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Princess Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 3</p>
            </div>
          </div>
          {/* CARD 2 XV*/}
          <div className="card mx-4 border-0 CardsXV" style={{ color: '#101010' }}>
            <i className="bi bi-palette mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body">
              <h4 className="card-title"></h4>                        
              <img src="XV2.jpg  " style={{  width: '200px', height:'350px', borderradius:'90%',marginTop:'20px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Princess Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 8</p>
            </div>
          </div>
          {/* CARD 3 XV*/}
          <div className="card mx-4 border-0 CardsXV" style={{color: '#101010' }}>
            <i className="bi bi-image mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body">
              <h4 className="card-title"></h4>                  
              <img src="XV3.jpg" style={{  width: '200px', height:'350px', borderradius:'90%',marginTop:'20px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Princess Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 9</p>
            </div>
          </div>
          {/* CARD 4 XV*/}
          <div className="card mx-4 border-0" style={{ color: '#101010', backgroundColor:'' }}>
            <i className="bi bi-rocket mx-3" style={{ fontSize: '80px', color: '#0D2D4E' }}></i>
            <div className="card-body">
              <h4 className="card-title"></h4>              
              <img src="XV4.jpg" style={{ width: '200px', height:'350px', borderradius:'90%',marginTop:'20px',marginBottom:'20px',marginLeft:'-20px' }} alt="Image" />                     
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'30px',marginTop:'-10px'}}>Princess Collection</p>
              <p style={{ color: '#101010',fontFamily:'EB Garamond', fontSize:'20px',marginTop:'10px'}}>cod: 10</p>
            </div>
          </div>        
        </div>
      </div>
      
    </div>     

    
  )
}

export default Index