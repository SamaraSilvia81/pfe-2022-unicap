import { useState } from "react";
import "./App.css";
import { Contador } from "./components/Contador";
import { Titulo } from "./components/Titulo";

function App() {

  const [item, setItem] = useState("Banana")
  const [contadores, setContadores] = useState([])
  const handleClickBtInserir = () => {
    const contadoresFiltrados = contadores.filter(
      (value) => value.props.txt === item
    );
    if(contadoresFiltrados.length === 0){
      setContadores([... contadores, <Contador key={item} txt={item} />])
    }
  }

  return (

    <div className="App">
      
     <div className="selecionadores">

       <input 
        placeholder="Item da lista de compras"
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />

      <button onClick={handleClickBtInserir}>Inserir</button>

     </div>

     
      {/* <Titulo txt="Nome: Maria" /> */}
      {/*<Titulo txt={`Idade = ${idade}`} />
      <Contador txt="Bananas" />
      <Contador txt="Laranjas" />
      <Contador txt="Tomates" />*/}

      <div className="listaDeCompras">{contadores}</div>

     </div>


  );
}

export default App;