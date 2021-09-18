import React from 'react'

export const NavButton = ({color,value,SetMenubuttonClicked,component,children}) => {
    const [hover,isSetHover] =React.useState(false)

    const setMouseEnter =() => {
        isSetHover((p) => !p)
    }
    const setMouseLeave = () => {
        isSetHover(false)
    }
    const getButtonClicked = () => {
        SetMenubuttonClicked(component)
    }
   
    
    return (
        <div className={hover?'namebuttonvalueafterhover':'namebuttonvalue'}  onMouseEnter={setMouseEnter} onMouseLeave={setMouseLeave} onClick={getButtonClicked}> 
            <div    style={{color:color}}  className='navbarHeadingSecondDiv'>
                <div className={hover?'afterhovericon':'icon'}  >{children}</div>  <div  className='value' >{value}</div>
            </div>
        </div>
    )
}
export default NavButton;