import React from 'react'
import '../css/nearplaces.css'
import imgs from './imgs'
import Carousel from 'react-bootstrap/Carousel';




export const Nearplaces = () => {
  return (
    <div className="nearplaces__div">
     <div className="carousal__div">

     <Carousel slide={false}>
      {imgs.map((item)=>(
      <Carousel.Item key={item.image}>
        <img
          className="d-block w-100 carasoul_img"
          src={item.image.val}
          alt=""
        />
        <Carousel.Caption>
          <div className="title__div">
          <h2>{item.image.title}</h2>
          <i>{item.desc}</i>
          <br/>
          <a className='img_lnk' href={item.url} target='_blank'>Visit here</a>
          </div>
     
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
     </div>



     
    </div>
  )
}



export default Nearplaces
