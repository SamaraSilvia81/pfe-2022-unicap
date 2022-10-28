import './App.css';
import Livros from "./components/Livros"

function App() {

  const titulo = "Bookstan"

  return (
    <div className="App">
      <h1>{titulo.toUpperCase()}</h1>
      <div>
       <Livros/>
      </div>
    </div>
  );
}

export default App;