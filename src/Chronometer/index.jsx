import React, { Component } from 'react';
import './style.css';

class Chronomether extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0.0
    };
    this.iniciar = this.iniciar.bind(this);
    this.zerar = this.zerar.bind(this);
    this.parar = this.parar.bind(this);

    this.timer = null;
  }

  render() {
    return (
      <div id='ChronoBox'>
        <img id='ChronoImage' src={require('../assets/chronometer.png')} alt='Chronometer' />
        <span id='ChronoTime'>{this.state.numero.toFixed(2)}</span>

        <div className='buttonBox'>
          <a className='buttons' onClick={this.iniciar}> Iniciar</a>
          <a className='buttons' onClick={this.parar}> Parar</a>
          <a className='buttons' onClick={this.zerar}> Zerar</a>
        </div>
      </div>
    );
  }

  iniciar() {
    if (this.timer ==null){
        this.timer = setInterval(() => {
          this.setState(prevState => ({
            numero: prevState.numero + 0.01
          }));
        }, 10);
        
    }
    else{
        clearInterval(this.timer);
        this.timer=null;
    }
    
  }

  zerar() {
    this.setState({ numero: 0.0 })
    clearInterval(this.timer);
    this.timer=null;
  }

  parar() {
    clearInterval(this.timer);
    this.timer=null;

  }
}

export default Chronomether;
