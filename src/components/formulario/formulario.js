import React from 'react';
import './style.css';


const Formulario = () => {

    return (
        <div className='formulario'>
            <div className='col-12'>
                <div className='row'>
                    <div className='formulario container col-lg-12 col-md-12 col-sm-12'>
                        <form className='container'>
                            <h2 className='d-flex justify-content-center m-4 p-2'>
                                Gostaria de receber novidades Razor?
                            </h2>
                            <div className="form-group">
                                <p for="exampleInputName1" className='mt-4 mb-1'>Nome</p>
                                <input type="text" className="p-2 form-control" id="exampleInputName1" placeholder="Seu Nome" />
                            </div>   

                            <div className="form-group">
                                <p for="exampleInputEmail1" className='mt-4 mb-1'>E-mail</p>
                                <input type="email" className="p-2 form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex.: seunome@dominio.com" />
                            </div>
                            <div className='col-4 container d-flex justify-content-center'>
                                <a href='#talent' id='botao' type="button" className="container mt-5 mb-5 btn-block btn btn-dark">Receber Novidades</a>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}    

export default Formulario