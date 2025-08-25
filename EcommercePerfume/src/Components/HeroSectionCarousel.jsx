import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function HeroSectionCarousel() {
  return (
    <Carousel className='w-100'>
      <Carousel.Item style={{width:"",height:"400px"}}>
        <img src="https://www.shutterstock.com/shutterstock/photos/1995714434/display_1500/stock-photo-still-life-of-various-perfume-bottles-concept-1995714434.jpg" alt=""  width={"100%"} height={'100%'}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style={{width:"",height:"400px"}}>
        {/* <ExampleCarouselImage text="Second slide" imgPath="../photo/Group.webp"/> */}
        <img src="https://www.shutterstock.com/shutterstock/photos/2129319530/display_1500/stock-photo-glass-bottle-with-perfume-on-background-of-very-peri-purple-fabric-close-up-photo-with-copy-space-2129319530.jpg" alt=""  width={"100%"} height={'100%'}/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:"",height:"400px"}}>
        <img src="https://www.shutterstock.com/shutterstock/photos/1019626234/display_1500/stock-photo-perfume-bottle-with-fresh-orchid-flower-on-purple-background-1019626234.jpg" alt=""  width={"100%"} height={'100%'}/>
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

export default HeroSectionCarousel;