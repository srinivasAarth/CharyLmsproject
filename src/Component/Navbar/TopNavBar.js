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
      <>
        <div className='topnav-fixed' ref={ref}   onClick={() => setIsMenuOpen(oldState => !oldState)}>

            <div className ={'input-top'}>
            <IoMdHelpBuoy  size ={'1.4em'} />
              <input className={"real-input"}  placeholder={'Search transactions, invoices or help'}/>
            </div>
            <div className='leftsideicons'>
              <IoMdHelpBuoy  size ={'1.4em'} />
              <IoIosChatbubbles  size ={'1.4em'}/> 
              <IoIosNotifications size ={'1.4em'} />
            </div>

              
              <div className='small-user' >
                  <div className='profile-name'>John Doe</div>
                  <IoIosArrowDown size ={'1em'}/> 
                  <img style ={{width : '40px'}} src="https://cdn.zeplin.io/61407dc892d6142539013dcb/assets/452D573B-BF22-48C1-8E3B-38C1BC2CAFCF.png" alt ={"chary"}/>
                    
              </div>
              
    </div>

       </>
    )
}
