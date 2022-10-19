import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import LogoCabecalho from './img/LogoCabecalho.png'

const Cabecalho = props => {

/*  -------------------- definir cor --------------------  !!! */

        return (
            <nav className='navbar navbar-default navbar-fixed-top role="navigation"'>
                <div className='container'>
                    <div className='navbar-header'>
                        
                        <img 
                        src={LogoCabecalho} 
                        className='logo-cabecalho container' 
                        alt='Razor'/>

                        <div className='nav navbar-nav navbar-right'>
                           <h1>
                            <a 
                            href='https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'
                            className='help container'>
                                Falar com Especialista
                            </a>  
                            </h1>                       
                        </div>                        
                    </div>
                </div>

            </nav>
        )

    
}
 
export default Cabecalho;