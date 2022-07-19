import React, { Component } from 'react';
import image1 from './images/imgg.png';
import image2 from './images/imgg2.png';
import image3 from './images/caroslimg3.png';
import { Carousel } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.css';
class Caroslee extends Component {
    state = {  } 
    render() { 
        return (
           
      <div>
<Carousel >
  <Carousel.Item>
    <img   style = {{width : "100%" , height : "40%"}}
      className="d-block  "
      src={image3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to no 1 Car Website</h3>
      <p>We have best quality cars just for you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img   style = {{width : "100%" , height : "40%"}}
      className="d-block   "
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Welcome to no 1 Car Website</h3>
      <p>We have best quality cars just for you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  style = {{width : "100%" , height : "40%"}}
      className="d-block "
      src={image1}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Welcome to no 1 Car Website</h3>
      <p>We have best quality cars just for you</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      </div>

        );
    }
}
 
export default Caroslee;