import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './components/cabecalho/cabecalho.js';
import Destaque from './components/Destaque/destaque.js';
import Maquinas from './components/maquinas/maquinas.js';
import Beneficios from './components/beneficios/beneficios.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Cabecalho />
        <Destaque />
        <Maquinas />
        <Beneficios />
        
      </header>
    </div>
  );
}

export default App;
