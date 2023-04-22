import React from 'react'
import '../css/carousal.css'
import Carousel from 'react-bootstrap/Carousel';
import items from './items';

export const Carusal = () => {
  return (
    <div className='carousel_div'>
    <Carousel >
      {items.map((item)=>(

<Carousel.Item interval={5000} key={item.image} indicators={true}>
<img fade={true}
  className="d-block w-100"
  src={item.image}
  alt="First slide"
  id="carousel_img"
/>
</Carousel.Item>


      ))}

    </Carousel>
        </div>
  )
}




export default Carusal;