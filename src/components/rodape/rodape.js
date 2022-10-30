import React from "react";
import './style.css';

import Local from './img/local.png'
import LogoRazor from './img/logo-razor.png'

const Rodape = () => {
    return (
        <div>
            <div className='col-12'>
                <div className='row'>
                    <footer className='col-lg-12 col-md-12 col-sm-12 container p-0'>
                        <div id='card-rodape' className="card card-items bg-dark text-white">
                            <img className="card-img" src={Local} alt="Card image" />
                            <div className="card-img-overlay container d-flex justify-content-center">
                                <div className="col-lg-4 col-md-4 col-sm-12 container">
                                    <h5 className="card-title mt-4 mb-4">ATENDIMENTO</h5>
                                    <p className="card-text">Segunda a sexta-feira</p>
                                    <p className="card-text">9h às 12h e 14h às 18h</p> 
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 container">
                                    <img src={LogoRazor} alt='Logo Razor' className='logo-razor-rodape container' />
                                    <a className="conhecer" href="https://workstation.razor.com.br/sobre/?utm_source=adwords&utm_medium=ppc&utm_campaign=[SEARCH%20]%20Workstation%20//%20CAD,%20BIM%20e%20CAM%20(BR)&utm_term=revit%20workstation&utm_content=">
                                        <h5 className="card-title conhecer container d-flex justify-content-center mb-4">CONHEÇA A RAZOR</h5>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 container">
                                    <h5 className="card-title a-right mt-4 mb-4 d-flex justify-content-end">Razor do Brasil LTDA</h5>
                                    <h5 className="card-title a-right mt-4 mb-4 d-flex justify-content-end">19.847.182/0001-69</h5>
                                    <p className="card-text a-right d-flex justify-content-end">(54) 3046-6350</p>
                                    <p className="card-text a-right d-flex justify-content-end">Passo Fundo/RS</p> 
                                </div>
                        
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Rodape