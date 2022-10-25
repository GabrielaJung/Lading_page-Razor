import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './components/cabecalho/cabecalho';
import Destaque from './components/Destaque/destaque.js';
import Maquinas from './components/maquinas/maquinas.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Cabecalho />
        <Destaque />
        <Maquinas />
        
      </header>
    </div>
  );
}

export default App;
