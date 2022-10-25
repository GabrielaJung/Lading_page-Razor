import React from 'react'
import './style.css';
import Virtuos from './img/virtuos.png'
import {ReactComponent as VirtuosLogo} from './img/virtuos-logo.svg'
import {ReactComponent as ProdigyLogo} from './img/prodigy-logo.svg'
import {ReactComponent as TalentLogo} from './img/talent-logo.svg'
import Check from './img/check.png'

const Maquinas = () => {
  return (
    <div>
        <div className='mt-auto'>
            <div className='col-12 container display-flex justify-content-center'>
                <VirtuosLogo className='logos mt-3 mb-3 container'/>
            </div>
            <div className='col-12 container justify-content-space-between'>
                <div className='row display-flex d-flex flex-row'>
                    <div className='p-2 virtuos-comprar container col-lg-4 col-sm-12 col-md-6'>
                        
                        <h3>A PARTIR DE R$39.848,94</h3>
                        <p className='desempenho'>Desempenho e poder de multiprocessamento de outro mundo.</p>

                            <a href='https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'>
                                <button className='orcar'>                        
                                    Orçar
                                </button>
                            </a>


                    </div>
                    <div className='p-2 virtuos container col-lg-4 col-sm-12 col-md-6'>
                        <img 
                            src={Virtuos} 
                            className='virtuos rounded media img-fluid max-width' 
                            alt='Virtuos'/>   
                    </div>
                    <div className='p-2 virtuos-descricao container col-lg-4 col-sm-12 col-md-6'>
                        <ul className='container'>
                            <li className='montar d-flex justify-content-start'>
                                MONTE SUA MÁQUINA
                            </li>
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
                        </ul>
                        
                    </div>
                </div>
            </div>    
        </div>
        <div className='maquinas-2'>
            <div className='col-12 container display-flex justify-content-center'>
                <div className='row display-flex d-flex flex-row'>
                    <div className='p-2 container col-lg-6 col-md-12 col-sm-12'>
                        <ProdigyLogo className='logos mt-5 mb-3 container'/>
                    </div>
                    <div className='p-2 container col-lg-6 col-md-12 col-sm-12'>
                        <TalentLogo className='logos mt-5 mb-3 container'/>
                    </div>
                </div>
            </div>
        </div>        
    </div>


  )
}

export default Maquinas