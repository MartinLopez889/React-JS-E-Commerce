import React from 'react';
import { useCartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const CartDetails = () => {
    const { cart, removeItem, clear } = useCartContext();

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    const handleClearCart = () => {
        clear();
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='bg-info'>
            <h2>Detalles del Carrito</h2>
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
                                <Button variant='warning' onClick={() => handleRemoveItem(item.id)}>Eliminar</Button>
                                <hr />
                            </div>
                        ))}
                    <hr />
                    <p>Precio total: {totalPrice}</p>
                    <Button variant='danger' onClick={handleClearCart}>Vaciar Carrito</Button>
                </>
            )}
        </div>
    );
};

export default CartDetails;