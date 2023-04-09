import React from 'react'
import '../css/header.css'
import SailingIcon from '@mui/icons-material/Sailing';
import InfoIcon from '@mui/icons-material/Info';
import PinDropIcon from '@mui/icons-material/PinDrop';
export const Header = () => {
  return (
    <div className='header'>
        <span title='boating' className='boating'><SailingIcon className='sailicon' fontSize='large'/></span> 
        <div className='sideicons'>   
            <span title='aboutus'><InfoIcon className='abouticon' fontSize='large'/></span>
            <span title='reachus'><PinDropIcon className='reachicon' fontSize='large'/></span>
        </div>
     
    
    
    
    </div>
  )
}

export default Header