import React from 'react'
import '../css/maps.css'

export const Maps = () => {
  return (
    <div className="maps__div" id="maps">
        <iframe className="map__frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.562140547615!2d74.46018007427685!3d14.27873888487737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc3b34a1ac201b%3A0x6d6049048cc61187!2sHonnavar%20Charvik%20boating!5e0!3m2!1sen!2sin!4v1682836868750!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
    </div>
  )
}


export default Maps
