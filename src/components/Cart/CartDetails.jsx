import React from "react";
import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const CartDetails = () => {
  const { cart, removeItem, clear, totalPrice } = useCartContext();

  return (
    <>
      <h2>Detalles del Carrito</h2>
      <div className="bg-info d-flex flex-wrap justify-content-around align-items-center">
        {cart.length === 0 ? (
          <div>
            <p>No hay items en el carrito</p>
            <Link to="/">Volver al catálogo</Link>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id}>
                <img src={item.pictureUrl} alt={item.title} />
                <p>Nombre: {item.title}</p>
                <p>Cantidad seleccionada: {item.quantity}</p>
                <p>Precio c/u: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
                <Button variant="warning" onClick={() => removeItem(item.id)}>
                  Eliminar
                </Button>
                <hr />
              </div>
            ))}
            <div>
              <Button variant="danger" onClick={clear}>
                Vaciar Carrito
              </Button>
              <hr />
              <br />
              <p className="fs-3">
                Precio total: ${totalPrice}{" "}
                <span>
                  <Link className="btn btn-light bg-success" to="/checkout">
                    Abonar
                  </Link>
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDetails;
