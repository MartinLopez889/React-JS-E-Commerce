import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item ({ id, title, description, price, pictureUrl, }){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{id} {title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Precio: {price}</Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Item