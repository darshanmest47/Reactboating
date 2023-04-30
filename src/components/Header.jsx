import React from 'react'
import '../css/header.css'
import SailingIcon from '@mui/icons-material/Sailing';
import InfoIcon from '@mui/icons-material/Info';
import PinDropIcon from '@mui/icons-material/PinDrop';
export const Header = () => {
  return (
    <div className='header'>
        <div title='boating' className='welcome to charvik boating'>
          <SailingIcon className='sailicon' fontSize='large'/>
          <span id="boat_title">Charvik-boating</span>
          </div> 
        <div className='sideicons'>   
            <span title='aboutus'><InfoIcon className='abouticon' fontSize='large'/></span>
            <a href="#maps">
            <span title='reachus'><PinDropIcon className='reachicon' fontSize='large'/></span>
            </a>
        </div>
     
    
    
    
    </div>
  )
}

export default Header