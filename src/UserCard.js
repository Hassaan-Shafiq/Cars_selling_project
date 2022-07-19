import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
const UserCard = (props) => {
    return (  
        <div style={{marginLeft:"30px"}}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.pic} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    );
}
 
export default UserCard;