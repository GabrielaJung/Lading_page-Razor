import React from "react";
import './style.css';

import ProcessadorPNG from './img/processador.png'

const Processador = () => {
    return (
        <div className='processador-bg'>
            <div className=' col-12 container'>
                <div className='row'>
                    <div className='p-5 col-lg-6 col-md-6 col-sm-12 container d-flex justify-content-center'>
                        <img src={ProcessadorPNG} alt='Processador' className='item-png' />
                    </div>
                    <div className='p-5 col-lg-6 col-md-6 col-sm-12 container '>
                        <h2 className=' mb-5 d-flex justify-content-center'>Chega de Fritar seu PC</h2>
                        <p className='promessa d-flex justify-content-justify'>Processadores de última geração Intel ou AMD, até 64 núcleos.</p>
                        <p className='promessa d-flex justify-content-justify'>Você pode customizar um multiprocessamento de até 2 CPUs por PC.</p>
                        <a href='#talent' id='botao' type="button" className="escolher container mt-5 mb-5 btn-block btn btn-dark">Escolher Máquina</a>
                    </div>
                    

                </div>
            </div>


        </div>
    );
}

export default Processador