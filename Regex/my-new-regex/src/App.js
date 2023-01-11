import React, { useState } from "react";
import { ContadorRegex } from "./components/ContadorRegex";
import "./App.css";

function App() {
  const regexVogais = /[aáàãâeéêiíoóõôuú]/gi;
  const regexConsoantes = /[bcçdfghjklmnpqrstvwxyz]/gi;
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");
  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };
  const handleClickBtInserir = () => {  // sistema de gerenciamento de novos textos
    let textoTrim = texto.trim();
    if (textoTrim) {
      setTextos([...textos, textoTrim]);  // 
    }
  };

  return (
    <div className="App">

      <h1>CONTADOR REGEX</h1>

      <p className="conteudo">
        <label htmlFor="texto">Digite um texto: </label>
        <input
          id="texto"
          type="text"
          value={texto}
          onChange={handleChangeTexto}
        />{" "}

        <button className="botao" onClick={handleClickBtInserir}>Inserir</button>
      </p>

      <div className="tabela">
        <table border={1}>
          <tr>
            <td>Texto</td>
            <td>Vogais</td>
            <td>Consoantes</td>
          </tr>
          {textos.length > 0 && textos.map((umTexto, index) =>  // map cria outro vetor - map == tr
            <tr key={index}>
              <td>{umTexto}</td>
              <td><ContadorRegex texto={umTexto} regex={regexVogais}/></td>
              <td><ContadorRegex
                texto={umTexto}
                regex={regexConsoantes}
              /></td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default App;