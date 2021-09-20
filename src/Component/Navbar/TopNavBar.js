import React from 'react'
import { Icon,InputGroup,Input,Avatar,Badge } from 'rsuite';
import {IoMdHelpBuoy} from 'react-icons/io'
import {IoIosChatbubbles} from 'react-icons/io'
import {IoIosNotifications} from 'react-icons/io'
import {IoIosArrowDown } from 'react-icons/io'


import '../ComponentCss/TopNavBar.css'


export const TopNavBar = () => {
   

    const ref = React.useRef()

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuOpen])

  console.log(isMenuOpen)
    
  const buttonClicked = () => {
      setIsMenuOpen(false)
      
  }
    
    return (
        <div className='TopnavbarFirstdiv' ref={ref}   onClick={() => setIsMenuOpen(oldState => !oldState)}>
<div className='searchbardiv'>
            <div className="search-box" >
          {!isMenuOpen?<><div className="btn-search1"> <Icon icon='search' /></div> 
   <div className='serchtext'>Search transactions, invoices or help</div>
   
   
   </>:
   <div className="search-box1" onClick={buttonClicked}>
    <InputGroup >
      <Input onClick={buttonClicked}/>
      <InputGroup.Addon onClick={buttonClicked} >
        <Icon icon="search" />
      </InputGroup.Addon>
    </InputGroup>
  
 </div>
   
   } 
</div>
</div>
            
            
<div className='leftsidebar'>
    <div  className='iconnav1' >
    <IoMdHelpBuoy />
    </div>
    <div className='iconnav2'>
    <IoIosChatbubbles />
    </div>

    <div className='iconnav3'>
      <div className='budge' >
      <Badge style={{background:'#ffc06a'}} />
      </div>
   <IoIosNotifications />
    

  
    </div>

    <div className='iconnav4'>
    <div className="Divider"></div>
    </div>
    <div className='iconnav5' >
        <div className='profilrname'><span>John Doe</span></div>
        <div className='iconnav6'> <IoIosArrowDown     /></div>
       
       
       
       
    </div>
    <div className='avtar'>
    <Avatar
      circle
      src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
    />
    </div>
    
</div>
        </div>
    )
}
