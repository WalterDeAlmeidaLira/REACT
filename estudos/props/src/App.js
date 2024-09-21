import './App.css';
import Button from './components/eventos/Button'
import Condicional from './components/eventos/Condicional';

function App() {

  function conversandoComFilho(e){
    console.log(e.target)
  }

  return (
    <div>
      <Button event={conversandoComFilho} text="texto do botao"/>
      <Condicional />
    </div>
  );
}

export default App;
