import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ImgDestaque from './img/img-destaque.png'

const Destaque = props => {

    return(
        <section className='section banner banner-default'>
            <div className='div-imagem-destaque container-xp justify-content-right'>
                
                
                <img 
                src={ImgDestaque} 
                className='destaque media img-fluid float-right' 
                alt='Razor'/>   
                
                        
            </div>            
        </section>
    );

}

export default Destaque