import React from 'react'
import './style.css';

import Garantia from './img/garantia.png'
import Desconto from './img/desconto.png'
import Frete from './img/frete.png'

const Beneficios = () => {
    return (

        <div>
            <div className='col-12'>
                <div className='row d-flex justify-content-center'>
                    <div className='beneficios m-3 container col-lg-12 col-md-12 col-sm-6'>
                        <div className='container'>

                            <h2 className=' m-3 beneficios-razor container d-flex justify-content-center'>
                                Benefícios Razor
                            </h2>
                                <div className='col-12'>
                                    <div className='row'>

                                        <div className='p-4 col-lg-4 col-md-4 col-sm-12'>
                                            <div className='container d-flex justify-content-center'>
                                                <img src={Garantia} alt='Garantia' className='selo garantia'/>
                                            </div> 
                                            <div className='container d-flex justify-content-center'>
                                                <p className='d-flex justify-content-center'>
                                                    Garantia estendida
                                                </p> 
                                            </div>
                                                                       
                                        </div>
                                        
                                        <div className='p-4 col-lg-4 col-md-4 col-sm-12'>
                                            <div className='container d-flex justify-content-center'>
                                                <img src={Desconto} alt='Desconto' className='selo desconto d-flex justify-content-center'/>
                                            </div>   
                                            <div className='container d-flex justify-content-center'>
                                                <p className='d-flex justify-content-center'>
                                                    10% de desconto à vista
                                                </p>  
                                            </div>                   
                                        </div>

                                        <div className='p-4 col-lg-4 col-md-4 col-sm-12'>
                                            <div className='container d-flex justify-content-center'>
                                                <img src={Frete} alt='Frete' className='selo frete'/> 
                                                
                                            </div>        
                                            <div className='container d-flex justify-content-center'>
                                                <p className='d-flex justify-content-center'>
                                                    Frete Grátis
                                                </p>
                                            </div>          
                                        </div>
                                    </div>
                                                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Beneficios