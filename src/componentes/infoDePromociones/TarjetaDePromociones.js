import React, { Component } from 'react';

class TarjetaDeDocente extends Component {


        render() {
            return (
    
    
                <div className="container">
    
                    <div className="row menu_inner">
                        <div className="col-lg-7" >
                            <div className="menu_list">
                                
                                <h3>{this.props.restaurante.titulo}</h3>
                                <br></br>
                                <h4>{this.props.restaurante.contenido}</h4>
                                <br></br>
                                <p>Esta promoción es valida hasta: <br></br>{this.props.restaurante.fechaExpiracion} </p>
                                <br/><br/><br/><h3 >$5.00</h3>
                                <ul className="list">

                                    
                                   
                                    
                                </ul>
    
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="menu_img">
                                <img src="img/menu.jpg" alt="" />
    
                            </div>
                                
                        </div>
    
    
                    </div>
                </div>
    
            );
    
        }
      /*   obtenerLabelDeTitulos = () => {
            let arrayDeTitulosHTML = [];
            for (let i = 0; i < this.props.restaurante.informacionLaboral.profesiones.length; i++) {
                arrayDeTitulosHTML.push(
                    <li>
                        <h4>{this.props.restaurante.informacionLaboral.profesiones[i].titulo}<span>$5.00</span></h4>
    
                        
                        <button >Mas Detalles</button>
                    </li>
    
                )
            }
            return arrayDeTitulosHTML;
        } */
   
}


export default TarjetaDeDocente;
