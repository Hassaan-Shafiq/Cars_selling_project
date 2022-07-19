import React, { Component } from 'react';
import AdminNav from './AdminNav';
import AdminSidebar from './AdminSidebar';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class AdminDeletePage extends Component {
    state = {
        name: "Delete Product"
    }
    render() {
        return (
            <div>
                {/* Nav Bar */}
                <AdminNav createState={this.state.name} />

                <div className='row' >
                    {/* Side Bar */}
                    <div className='col-sm-3 col-md-3' style={{ backgroundColor: " black", height: 510, }}>
                        <AdminSidebar />
                    </div>


                    {/* Center Portion */}
                    <div className='col-sm-9 col-md-9' style={{ backgroundColor: "skyblue" }}>
                    <Form style={{ marginTop: 40 }}>
                            <Row className="mb-3" style={{width:1000}}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="Product Name" placeholder="Enter Product Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Barcode</Form.Label>
                                    <Form.Control type="Barcode" placeholder="Enter Product Barcode" />
                                </Form.Group>
                            </Row>

                              <Row style={{width:500}}>
                            <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Section</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                       <option>New Car </option>
                                        <option>Used Car</option>
                                        <option>Bikes</option>
                                        <option>Accessories</option>
                                    </Form.Select>
                                </Form.Group> </Row>
                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> 
                           
                           
                            
                            <Button variant="primary" type="submit">
                                Delete
                            </Button>
                        </Form>
                    
                   
                    </div>


                </div>
            </div>
        );
    }
}

export default AdminDeletePage;