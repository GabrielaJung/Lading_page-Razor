import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './components/cabecalho/cabecalho.js';
import Destaque from './components/Destaque/destaque.js';
import Maquinas from './components/maquinas/maquinas.js';
import Beneficios from './components/beneficios/beneficios.js';
import Processador from './components/processador/processador.js';
import Grafico from './components/grafico/grafico.js';
import Formulario from './components/formulario/formulario.js';
import Time from './components/time/time.js'
import Rodape from './components/rodape/rodape.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Cabecalho />
        <Destaque />
        <Maquinas />
        <Beneficios />
        <Processador />
        <Grafico />
        <Formulario />
        <Time />
        <Rodape />
        
      </header>
    </div>
  );
}

export default App;
