import React from 'react'

export const NavBarHeading = ({value,color,background}) => {
    return (
        <div className='navBarHeading'  style={{background:background,color:color}}>
  
        {value} 
        </div>
        
     
    )
}

export default NavBarHeading
