import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ImgDestaque from './img/img-destaque.png'

const Destaque = props => {

    return(
        <section className='section banner banner-default'>
            <div 
            className='div-imagem-destaque position-relative display-inline-block'>
                
                
                <img 
                src={ImgDestaque} 
                className='destaque media img-fluid max-width' 
                alt='Razor'/>   

                    <label className='container'>Workstations de 
                    <br></br>Alta Performance</label>


                
                        
            </div>            
        </section>
    );

}

export default Destaque