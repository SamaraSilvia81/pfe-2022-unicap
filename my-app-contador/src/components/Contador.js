import React from "react";

export const Contador = ({ txt }) => {
  let [contador, setContador] = React.useState(0);
  const handleClickMais = () => {
    setContador((contadorAtual) => contadorAtual + 1);
  };
  const handleClickMenos = () => {
    if(contador > 0){
      setContador(contador - 1);
    }
  };
  return (
    <div>
      <h1>{txt}</h1>
      <h2>{contador}</h2>
      <button onClick={handleClickMais}>+</button>
      <button onClick={handleClickMenos} disabled={contador <= 0}>-</button>
    </div>
  );
};