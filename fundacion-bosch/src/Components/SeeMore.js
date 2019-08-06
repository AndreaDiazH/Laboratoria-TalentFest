import React, { Component } from "react";
import "./Style.css/seeMore.css";
import bluePrint from './resources/blueprint.png';
import dummy2 from './resources/dummy2.png';

class SeeMore extends Component {

    constructor(props){
        super(props);
          this.nameAsociaton = "COMITE GUADALAJARA (RNMX)"
          this.name = "Donativo de Juárez para las víctimas del sismo";
          this.describeProyect = "Comenzó el proyecto de infraestructura del CAM Polanco. En dicha obra se están realizando trabajos de restauración en las instalaciones como: resane, pintura de las paredes y reparación del elevador. En este proyecto se tuvo que hacer nuevamente debido a los cambios administrativos que hubo dentro de la fundación. Las horas de voluntariado incluyen: visitas escuela y directora (35 horas) para ver problemática, llenado de formatos anteriores (Fondo Unido), llenado de formato Fundación Bosch, recolección de firmas, visita escuela con proveedores para de generar y actualizar cotizaciones (10 horas), trámites administrativos con INFEJAL (Instituto de Infraestructura de Jalisco) (5 horas), SEP/Secretario de Infraestructura Jalisco (20 horas) para llenado de formatos internos, modificaciones en la redacción y datos proveedores. El donativo se ha distribuido para atender a 5 escuelas afectadas.";  
          this.number = 200;
          this.tag1 = "Infraestructura";
          this.tag2 = "Me Gusta Mi Escuela";
          this.tag3 = "Juárez";
      }

render(){
    return(
    <div>
        <div className="seeMorePage">
            <div className= "contactTitle">
                <div className="upTitle"> 
                    {this.nameAsociaton}
                </div>
                <h1>
                {this.name}
                </h1>
            </div>
            <div className= "row">
                <div className= "row col-md-12 col-sm-12 col-lg-12">
                <div className= "row col-md-6 col-sm-12 col-lg-6 formatSquare">
                        <div className= "col-md-6 col-sm-12 col-lg-6 benefitStadistic">
                            <img alt="beneficiados" src={bluePrint} />
                            <p className="upTitleDark">INFRAESTRUCTURA</p>
                            <p className="numberData">BENEFICIADOS: {this.number}</p>
                        </div>
                    </div>
                    <div className="row col-md-6 col-sm-12 col-lg-6 contactInfoTxt">
                        <div className="row">
                            <div className= "col-md-12 col-sm-12 col-lg-12">
                                {this.describeProyect}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row col-md-12 col-sm-12 col-lg-12 proyectPic">
            <img alt="portada" src={dummy2} />
        </div>
    </div>
    );
}

} 

export default SeeMore;