import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
class Loginform extends Component {
    state = {  } 
    render() { 
        return (

           <div className='row' style={{backgroundColor : "skyblue"}}>
             <center>
             <div className='col-md-3' style={{marginTop: "10%"}}>
               
               <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
</div></center>
           </div>
        );
    }
}
 
export default Loginform;