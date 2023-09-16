import React, { useState } from 'react';

function ItemCount({ stock, onAdd }) {
  const [contador, setContador] = useState(1);

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const agregarAlCarrito = () => {
    if (stock > 0) {
      onAdd(contador);
    }
  };

  return (
    <>
      <div>
        <button onClick={restarContador}>-</button>
        <span>{contador}</span>
        <button onClick={sumarContador}>+</button>
      </div>
      <button onClick={agregarAlCarrito} disabled={stock === 0}>
        Agregar
      </button>
    </>
  );
}

export default ItemCount;






