import React from "react";
import './style.css';

import ChipGraficoPNG from './img/chip-grafico.png'

const Grafico = () => {
    return (
        <div className='grafico-bg'>
            <div className=' col-12 container'>
                <div className='row'>

                    <div className='p-5 col-lg-6 col-md-6 col-sm-12 container '>
                        <h2 className=' mb-5 d-flex justify-content-center'>Chip gráfico que não arrega para o seu render</h2>
                        <p className='promessa d-flex justify-content-justify'>Se tempo é dinheiro, a Workstation Pro é o melhor investimento que você pode fazer.</p>
                        <p className='promessa d-flex justify-content-justify'>Alcance a máxima velocidade e o extremo desempenho com as linhas Nvidia RTX Geforce ou RTX Quadro.</p>
                        <a href='#talent' id='botao' type="button" className="escolher container mt-5 mb-5 btn-block btn btn-dark">Escolher Máquina</a>
                    </div>
                    <div className='p-5 col-lg-6 col-md-6 col-sm-12 container d-flex justify-content-center'>
                        <img src={ChipGraficoPNG} alt='Chip Gráfico' className='item-png' />
                    </div>                    

                </div>
            </div>


        </div>
    );
}

export default Grafico