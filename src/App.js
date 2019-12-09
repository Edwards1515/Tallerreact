import React, { Component } from 'react';
import TarjetaDePromociones from './componentes/infoDePromociones/TarjetaDePromociones';



class App extends Component {

  constructor() {
    super();

    this.state = {
      producto: [],
      productoBackup: [],
      textBuscar: "",
      miArrayDePersonas: [],
      criterioDeOrdenamiento: {
        nombreDelCriterio: "nombre",
        descendente: false
      },
      arrayDeRestaurantes :[],
      arrayDePromociones:[]
    }
  }

  componentDidMount() {

    fetch('https://tallerfinal.herokuapp.com/taller/obtenerTodosLosRestaurantes')
      .then(response => {
        response.json()
          .then(datos =>{
            this.setState({
              arrayDeProfesores: datos.Restaurantes
            })
            console.log(this.state.arrayDeProfesores);
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))

     

        fetch('https://tallerfinal.herokuapp.com/taller/obtenerTodosLasPromociones')
        .then(response => {
          response.json()
            .then(datos =>{
              this.setState({
                arrayDePromociones: datos.Promociones
              })
              console.log(this.state.arrayDePromociones);
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  

  render() {

    return (
      <React.Fragment>
               
                <div className="container">
                    <div className="main_title">
                        <h2>Menú de Promociones</h2>
                        <p>...</p>
                    </div>
                    {/* {this.obtenerCardsConTarjetasDePersonas()} */}
                    {this.obtenerCardsConDocentesDesdeElBack()}
                </div>
            </React.Fragment>
    );
  }

 



  obtenerCardsConDocentesDesdeElBack = () => {
    let arrayDeCardsHTML = [];
    for (let i = 0; i < this.state.arrayDePromociones.length; i++) {
      arrayDeCardsHTML.push(
        <TarjetaDePromociones promocion="2x1" restaurante={this.state.arrayDePromociones[i]}></TarjetaDePromociones>
        
      )
     
     
    }
    return arrayDeCardsHTML;
  }

 
}

export default App;
