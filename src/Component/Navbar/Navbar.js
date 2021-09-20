import React from 'react'

import NavBarHeading from '../../Customizable Component/NavBarHeading'
import NavButton from './NavButton'

export const Navbar = ({navBarData,SetMenubuttonClicked }) => {
    return (
        <div className='navdiv'>
              <NavBarHeading value='IMPEKABLE'  color='white' background='#3c3b53'/>
              <>
              {navBarData.map((el) => {
                  
                  return(
                      <div key={el.id}>
                       <NavButton  color='rgb(190, 193, 196)' value={el.value} SetMenubuttonClicked={SetMenubuttonClicked}  component={el.Component}>
                           <span >{el.Icon}</span>
             
              </NavButton>
                      </div>
                  )
              })}
              </>
             
              
          </div>
    )
}

export default Navbar