import React from 'react'
import {Avatar} from 'rsuite';import { MdEdit } from 'react-icons/md'
import { CustomerCardFooter } from './CustomerCardFooter';



export const CustomerCard = ({newArray,openmodel,cancelButtonClick}) => {
    return (
        <>
        {newArray.map((el) => {
            return(
                <>
                 <div key={el.id} className='commentdetails' >
         <div>
             <div className='contentheader'>
                 <div className='imagediv'>
                     <div className='imageinsidecontent'>
                     <Avatar size='lg' circle src={el.image}/>
                     </div>
                 </div>
                 <div className='editablecontentdiv'>
                     <div className='seteditingoption'>
                         <div className='indiname'>{el.name}</div>
                         <div className='editandremove'>
                         <div className='editicon'onClick={() =>openmodel(el) }><MdEdit /> </div>
                        
                        
                        
                             <div className='cancelicon' onClick= {() => cancelButtonClick(el)}>X</div>
                         </div>
                        
                     </div>
                     <div className='stateName'>{el.state}</div>
                     <div className='mobilenumber'>Mobile : {el.mobile}</div>
                 </div>
             </div>
         </div>

    <CustomerCardFooter />
</div>
       
  
       
                </>
            )
        })}
        </>
       
    )
}
