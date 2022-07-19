import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const UserPurchaseCard = (props) => {
    return ( 
        <div style={{marginLeft:"30px"}}>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.pic} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
    {props.description}
    <br></br>
     <b>Total Quantity left: {props.items}</b>
     </Card.Text>
    <Button variant="primary" onClick={props.method}>Add to Cart</Button>
  </Card.Body>
</Card>
        </div>
     );
}
 
export default UserPurchaseCard;