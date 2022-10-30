import React from "react";
import './style.css';

import Gabriela from './img/gabriela.jpg'
import Yacana from './img/yacana.jpg'
import Rui from './img/rui.jpg'

const Time = () => {
    return (
        <div>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 container'>
                        <h2 className='d-flex justify-content-center m-4 p-2'>Conheça a nossa equipe NerdScript</h2>     
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 container d-flex justify-content-center'>
                        <div className="card m-2 mb-5">
                            <img src={Gabriela} className="card-img-top" alt="Gabriela" />
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">Gabriela Jung</h5>
                                <p className="card-text d-flex justify-content-center">Aluna do #TeuFuturo 2022</p>
                                <a href="mailto: gabrielamjung@gmail.com subject=Olá!" className='links d-flex justify-content-center'>E-mail</a>
                                <a href="https://www.linkedin.com/in/gabriela-jung-53b345227/" className='links d-flex justify-content-center'>LinkedIn</a>
                            </div>
                        </div>                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 container d-flex justify-content-center'>
                        <div className="card m-2 mb-5">
                            <img src={Yacana} className="card-img-top" alt="Yaçanã" />
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">Yaçanã Isis</h5>
                                <p className="card-text d-flex justify-content-center">Aluna do #TeuFuturo 2022</p>
                                <a href="mailto: yacana.isis@gmail.com subject=Olá!" className='links d-flex justify-content-center'>E-mail</a>
                                <a href="https://www.linkedin.com/in/ya%C3%A7an%C3%A3-isis-lopes-8b85ab18b" className='links d-flex justify-content-center'>LinkedIn</a>
                            </div>
                        </div>                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 container d-flex justify-content-center'>
                        <div className="card m-2 mb-5">
                            <img src={Rui} className="card-img-top" alt="Rui" />
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">Rui Vicente</h5>
                                <p className="card-text d-flex justify-content-center">Aluno do #TeuFuturo 2022</p>
                                <a href="mailto: rui.vicente2004@gmail.com subject=Olá!" className='links d-flex justify-content-center'>E-mail</a>
                                <a href="https://www.linkedin.com/in/gabriela-jung-53b345227/" className='links d-flex justify-content-center'>LinkedIn</a>
                            </div>
                        </div>                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Time