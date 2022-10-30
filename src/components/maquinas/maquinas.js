import React from 'react'
import './style.css';

import Virtuos from './img/virtuos.png'
import Prodigy from './img/prodigy.png'
import Talent from './img/talent.png'

import {ReactComponent as VirtuosLogo} from './img/virtuos-logo.svg'
import {ReactComponent as ProdigyLogo} from './img/prodigy-logo.svg'
import {ReactComponent as TalentLogo} from './img/talent-logo.svg'

import Check from './img/check.png'

const Maquinas = () => {
  return (
    <div>
        <div className='mt-auto'>
            <div className='col-12 container display-flex justify-content-center'>
                <TalentLogo id='talent' className='logos mt-3 mb-3 container'/>
            </div>
            <div className='col-12 container justify-content-space-between'>
                <div className='row display-flex d-flex flex-row'>
                    <div className='p-2 talent-comprar container col-lg-4 col-sm-12 col-md-6'>
                        
                        <h3>A PARTIR DE R$6.883,45</h3>
                        <p className='desempenho'>Desempenho e poder de multiprocessamento de outro mundo.</p>

                            <a href='https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'>
                                <button className='orcar'>                        
                                    Orçar
                                </button>
                            </a>


                    </div>
                    <div className='p-2 talent container col-lg-4 col-sm-12 col-md-6'>
                        <img 
                            src={Talent} 
                            className='talent rounded media img-fluid max-width' 
                            alt='Talent'/>   
                    </div>
                    <div className='p-2 talent-descricao container col-lg-4 col-sm-12 col-md-6'>
                        <ul className='container'>
                            <li className='montar d-flex justify-content-start'>
                                MONTE SUA MÁQUINA
                            </li>
                            <li className='container d-flex justify-content-start'>
                                <img src={Check} alt='checked' className='check'/>
                                Até 4.3GHz
                            </li>
                            <li className='container d-flex justify-content-start'>
                                <img src={Check} alt='checked' className='check'/>
                                1 placa de vídeo
                            </li>
                            <li className='container d-flex justify-content-start'>
                                <img src={Check} alt='checked' className='check'/>
                                Até 64GB de RAM
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>    
        </div>
        <div className='maquinas-2'>
            <div className='col-12 container d-flex justify-content-center'>
                <div className='maquinas container row flex-row'>

                    <div className='p-5 div-maq container col-lg-6 col-md-12 col-sm-12'>
                        <ProdigyLogo className='logos mt-3 mb-3 container'/>
                        <img src={Prodigy} 
                        alt='Prodigy' 
                        className='maquina p-2 container  rounded media img-fluid max-width' />
                        <p className='preco d-flex justify-content-center'>
                            A PARTIR DE R$10.841,16
                        </p>                    
                        <ul className='container descricao'>

                            <li className='container d-flex justify-content-start'>
                                <img src={Check} alt='checked' className='check'/>
                                Até 5.1GHz
                            </li>
                            <li className='container d-flex justify-content-start'>
                                <img src={Check} alt='checked' className='check'/>
                                Até 2 placas de vídeo
                            </li>
                            <li className='container d-flex justify-content-start'>
                                <img src={Check} alt='checked' className='check'/>
                                Até 128GB de RAM
                            </li>
                            <li>
                                <a href='https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'>
                                    <button className='orcar'>                        
                                        Orçar
                                    </button>
                                </a>                                
                            </li>
                        </ul>


                        
                    </div>

                    <div className='p-5 div-maq col-lg-6 col-md-12 col-sm-12'>

                        <VirtuosLogo className='logos mt-3 mb-3 container'/>
                        <img src={Virtuos} 
                        alt='Virtuos' 
                        className='maquina p-2 container  rounded media img-fluid max-width' />
                    
                        <p className='preco d-flex justify-content-center'>
                            A PARTIR DE R$39.848,94
                        </p>                    
                        <ul className='container descricao'>

                            <li className='container d-flex justify-content-start'>
                                <img src={Check} alt='checked' className='check'/>
                                Até 4.8GHz
                            </li>
                            <li className='container d-flex justify-content-start'>
                                <img src={Check} alt='checked' className='check'/>
                                Até 3 placas de vídeo
                            </li>
                            <li className='container d-flex justify-content-start'>
                                <img src={Check} alt='checked' className='check'/>
                                Até 256GB de RAM
                            </li>
                            <li>
                                <a href='https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'>
                                    <button className='orcar'>                        
                                        Orçar
                                    </button>
                                </a>                                
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>        
    </div>


  )
}

export default Maquinas