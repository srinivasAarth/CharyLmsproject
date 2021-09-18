import React from 'react'
import {RiHome4Line} from 'react-icons/ri'
import {BsBarChartFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FaProductHunt} from 'react-icons/fa'
import {FaFileInvoice} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import {IoMdChatboxes } from 'react-icons/io'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {IoMdHelpBuoy} from 'react-icons/io'
import {MdSettings} from 'react-icons/md'
import Home from '../MenuComponent/Home'
import Dashboard from '../MenuComponent/Dashboard'
import Inbox from '../MenuComponent/Inbox'
import Products from '../MenuComponent/Products'
import Invoices from '../MenuComponent/Invoices'
import { Customers } from '../MenuComponent/Customers'
import { ChatRoom } from '../MenuComponent/ChatRoom'
import { Calendar } from '../MenuComponent/Calendar'
import { HelpCenter } from '../MenuComponent/HelpCenter'
import { Settings } from '../MenuComponent/Settings'
import '../Component2.css'
import Navbar from './Navbar/Navbar'

export const Component2 = () => {
    const navBarData = [
        {
            id:'0',
            value:'Home',
            Icon:<RiHome4Line />,
            Component:<Home />

        },
        {
            id:'1',
            
            value:'Dashboard',
            Icon:<BsBarChartFill />,
            Component:<Dashboard />
        },
        {
            id:'2',
            
            value:'Inbox',
           
            Icon:<AiOutlineMail />,
            Component:<Inbox />
        },
        {
            id:'3',
           
            value:' Products',
          
            Icon:<FaProductHunt />,
            Component:<Products />
        },
        {
            id:'4',
           
            value:'Invoices',
           
            Icon:<FaFileInvoice />,
            Component:<Invoices />
        },
        {
            id:'5',
            
            value:'Customers',
           
            Icon:<BiUser />,
            Component:<Customers />
        },
        {
            id:'6',
            
            value:'Chat Room',
           
            Icon:<IoMdChatboxes />,
            Component:<ChatRoom />
        },
        {
            id:'7',
            
            value:'Calendar',
           
            Icon:<FaRegCalendarAlt />,
            Component:<Calendar />
        },
        {
            id:'8',
            
            value:'Help Center',
          
            Icon:<IoMdHelpBuoy />,
            Component:<HelpCenter />
        },
        {
            id:'9',
            
            value:'Settings',
          
            Icon:<MdSettings />,
            Component:<Settings />
        },

    ]
    
    const [menuButtonClicked,SetMenubuttonClicked] = React.useState(null)
    console.log(menuButtonClicked)
    
    return (
        <div  className='Component2div'>
         <Navbar navBarData ={navBarData}  SetMenubuttonClicked={SetMenubuttonClicked}/>
          <div className='menudiv'>{menuButtonClicked}</div>
        </div>
    )
}
export default Component2
