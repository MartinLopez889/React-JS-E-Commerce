import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ItemCount({ initial, stock, onAdd }) {
  const [contador, setContador] = useState(initial);

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
        <Button variant="primary" onClick={restarContador}>
          -
        </Button>
        <span> {contador} </span>
        <Button variant="primary" onClick={sumarContador}>
          +
        </Button>
      </div>
      <hr />
      <Button
        variant="primary"
        onClick={agregarAlCarrito}
        disabled={stock === 0}
      >
        Agregar
      </Button>
    </>
  );
}

export default ItemCount;
