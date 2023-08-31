import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../src/index.css";

const Index = () => {
  return (
    <div style={{ backgroundColor: "#E8E5E5", paddingBottom: "50px" }}>
      <div className="container d-flex" style={{ color: "#E8E5E5" }}>
        <div className="col-12">
          <br></br>
          <br></br>
          <h1
            className="mt-1 "
            style={{
              color: "#101010",
              fontSize: "90px",
              fontFamily: "EB Garamond",
              marginLeft: "250px",
            }}
          >
            Portafolio Ética Social
          </h1>
        </div>
      </div>
      <div className="container d-flex" style={{ color: "white" }}>
        {/* Card  1*/}
        <div className="card col-6">
          <div
            className="card-header"
            style={{
              backgroundColor: "#172E4B",
              color: "#f3ca4c",
              textAlign: "center",
            }}
          >
            Doctrina Social de la Iglesia
          </div>
          <div className="card-body" style={{ backgroundColor: "#dee5ef", color:'black' }}>
            <h5 className="card-title" style={{textAlign:'center'}}>¿Qué es la Doctrina Social de la Iglesia? </h5>
            <p className="card-text" style={{paddingBottom:'5px'}}>
            La Doctrina Social de la Iglesia es un conjunto de principios éticos que guía a la comunidad católica 
            en la búsqueda de justicia, solidaridad y dignidad humana en la sociedad.
            </p>
            <a
              href="/Doctrina"
              className="btn"
              style={{
                backgroundColor: "#172E4B",
                color: "#f3ca4c",
                marginBottom:'10px',
                marginLeft:'250px'
              }}
            >
              Leer Más
            </a>
          </div>
        </div>

        {/* Card  2*/}
        <div className="card col-6" style={{ marginLeft: "30px" }}>
          <div
            className="card-header"
            style={{
              backgroundColor: "#172E4B",
              color: "#f3ca4c",
              textAlign: "center",
            }}
          >
            De la Rerum Novarum hasta nuestros días
          </div>
          <div className="card-body" style={{ backgroundColor: "#dee5ef" }}>
          <h5 className="card-title" style={{textAlign:'center'}}>¿Qué es la Rerum Novarum? </h5>
            <p className="card-text" style={{paddingBottom:'5px'}}>
            La Rerum Novarum es como un faro histórico: en 1891, iluminó el horizonte social con 
            la primera encíclica que abordó los derechos de los trabajadores y la justicia en un mundo 
            en transformación.
            </p>
            <a
              href="/Novarum"
              className="btn "
              style={{
                backgroundColor: "#172E4B",
                color: "#f3ca4c",
                marginBottom:'10px',
                marginLeft:'250px'
              }}
            >
              Leer Más
            </a>
          </div>
        </div>
      </div>
      <br></br>

      <div className="container d-flex" style={{ color: "" }}>
        {/* Card  3*/}
        <div className="card col-6">
          <div
            className="card-header"
            style={{
              backgroundColor: "#172E4B",
              color: "#f3ca4c",
              textAlign: "center",
              
            }}
          >
            La persona humana y sus multiples dimensiones
          </div>
          <div className="card-body" style={{ backgroundColor: "#dee5ef", paddingBottom:'10px'}}>
          <h5 className="card-title" style={{textAlign:'center'}}>¿En qué consta este tema? </h5>
            <p className="card-text" style={{paddingBottom:'5px'}}>
            Iluminada por el admirable mensaje bíblico, la doctrina social de la Iglesia se detiene, 
            ante todo, en los aspectos principales e inseparables de la persona humana para captar las 
            facetas más importantes de su misterio y de su dignidad
            </p>
            <a
              href="/Dimensioneshumanas"
              className="btn "
              style={{
                backgroundColor: "#172E4B",
                color: "#f3ca4c",
                marginBottom:'10px',
                marginLeft:'250px'
              }}
            >
              Leer Más
            </a>
          </div>
        </div>

        {/* Card  4*/}
        <div className="card col-6" style={{ marginLeft: "30px" }}>
          <div
            className="card-header"
            style={{
              backgroundColor: "#172E4B",
              color: "#f3ca4c",
              textAlign: "center",
            }}
          >
            Los Derechos Humanos
          </div>
          <div className="card-body" style={{ backgroundColor: "#dee5ef", paddingBottom:'10px' }}>
          <h5 className="card-title"style={{textAlign:'center'}}>¿Qué son los derechos humanos? </h5>
            <p className="card-text" style={{marginBottom:'5px'}}>
            Los derechos humanos son como los pilares invisibles de la dignidad: 
            garantías fundamentales que cada persona merece, tejidas en la esencia 
            misma de ser humano, para proteger la libertad, igualdad y respeto.
            </p>
            <a
              href="/Humanderechos"
              className="btn"
              style={{
                backgroundColor: "#172E4B",
                color: "#f3ca4c",  
                marginTop:'30px',
                marginBottom:'5px',              
                marginLeft:'250px'
              }}
            >
              Leer Más
            </a>
          </div>
        </div>
      </div>
      <br></br>
        {/* Card  5*/}
      <div className="container d-flex" style={{ color: "" }}>
        
        <div className="card col-6" style={{ marginLeft: "300px" }}>
          <div
            className="card-header"
            style={{
              backgroundColor: "#172E4B",
              color: "#f3ca4c",
              textAlign: "center",
            }}
          >
            Principio del Bien Común
          </div>
          <div className="card-body" style={{ backgroundColor: "#dee5ef" }}>
          <h5 className="card-title" style={{textAlign:'center'}}>¿Qué es el principio del bien común? </h5>
            <p className="card-text" style={{paddingBottom:'10px'}}>
            El principio del bien común es como el pegamento invisible que une armoniosamente los intereses
            individuales en pro de un beneficio colectivo; es la brújula que guía hacia decisiones y acciones 
            que enriquecen la vida de todos en la comunidad.
            </p>
            <a
              href="/Principio"
              className="btn"
              style={{
                backgroundColor: "#172E4B",
                color: "#f3ca4c",                
                marginLeft:'250px'
              }}
            >
              Leer Más
            </a>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Index;
