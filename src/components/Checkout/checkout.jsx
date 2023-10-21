import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { db } from "../../services/firebase";
import { useCartContext } from "../../contexts/CartContext";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [validateEmail, setValidateEmail] = useState("");
  const { cart, totalPrice } = useCartContext();

  const datosComprador = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const terminarCompra = (e) => {
    e.preventDefault();
    let order = {
      user,
      Items: cart,
      total: totalPrice,
      date: serverTimestamp(),
    };
    const ventas = collection(db, "orders");
    addDoc(ventas, order)
      .then((res) => console.log(res.id))
      .catch((error) => console.log(error));
  };

  const camposLlenos = user.name && user.email && validateEmail === user.email;

  return (
    <Form
      className="m-5 pt-2 col-4 position-absolute top-50 start-0 translate-middle-y border border-black ml-4 bg-primary text-white"
      onSubmit={terminarCompra}
    >
      <Form.Group className="mb-3 p-2" controlId="formGroupName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          className="border border-black bg-body-secondary"
          onChange={datosComprador}
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
        />
      </Form.Group>
      <Form.Group className="mb-3 p-2" controlId="formGroupEmail">
        <Form.Label>Dirección de e-mail</Form.Label>
        <Form.Control
          className="border border-black bg-body-secondary"
          onChange={datosComprador}
          type="email"
          name="email"
          placeholder="email@blabla.com"
        />
      </Form.Group>
      <Form.Group className="mb-3 p-2" controlId="formGroupEmail">
        <Form.Label>Repita su e-mail</Form.Label>
        <Form.Control
          className="border border-black bg-body-secondary"
          type="email"
          name="email"
          onChange={(e) => setValidateEmail(e.target.value)}
          placeholder="email@blabla.com"
        />
      </Form.Group>
      <Form.Group className="mb-3 p-2" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="border border-black bg-body-secondary"
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
        />
      </Form.Group>
      <button
        className="btn btn-dark m-3 "
        type="submit"
        disabled={!camposLlenos}
      >
        Generar orden
      </button>
    </Form>
  );
};

export default Checkout;
