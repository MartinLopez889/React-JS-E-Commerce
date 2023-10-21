import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ id, title, description, price, pictureUrl }) {
  return (
    <Card style={{ width: "18rem", height: 500 }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body className="position-absolute bottom-0 start-0">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <div className="pb-3">
          <Link to={`/detail/${id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;
