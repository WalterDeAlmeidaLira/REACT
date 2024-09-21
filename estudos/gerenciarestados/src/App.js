import Cabecalho from './components/Cabecalho';
import Contador from './components/Contador';
import { ProvedorContagem } from './ContadorContexto'; 


function App() {
  return (
    <div className="App">
      <ProvedorContagem>
        <Cabecalho />
        <Contador />
      </ProvedorContagem>
      
    </div>
  );
}

export default App;
