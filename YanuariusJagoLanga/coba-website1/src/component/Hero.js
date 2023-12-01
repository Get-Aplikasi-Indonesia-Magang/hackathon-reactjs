import { Carousel } from 'react-bootstrap';
import hero1 from './../asset/hero1.jpg';
import hero2 from './../asset/hero2.jpg';
import hero3 from './../asset/hero3.jpg';


const Hero = ()=> {
    return(
        <Carousel>
      <Carousel.Item>
            <img 
            className='d-block w-100'
            src={hero1}
            alt='first slide'
            />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='d-block w-100'
            src={hero2}
            alt='two slide'
            />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img 
                className='d-block w-100'
                 src={hero3}
                 alt='three slide'
            />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}
export default Hero;