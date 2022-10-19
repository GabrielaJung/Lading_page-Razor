import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import GifDestaque from './img/gif-destaque.gif'

const Destaque = props => {

    return(
        <section className='section jumbotron'>
            <div>
                
                
                <img 
                src={GifDestaque} 
                className='gif-destaque media' 
                alt='Razor'/>   
                
                        
            </div>            
        </section>
    );

}

export default Destaque