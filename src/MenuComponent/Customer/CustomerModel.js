import React from 'react'
import {Button} from 'rsuite';

export const CustomerModel = ({ Darci,getChange,name,closebutton}) => {
    return (
        <div className={!Darci?'modelshow':'modelhide'}>
             <input onChange={getChange} className ={"input-sec"} value={name} type="input"  placeholder="Enter Name..." name="name" id='name' />
             <Button className ={"btn-click"} onClick={closebutton} appearance='primary' block>Save name</Button>
        </div>
       
         
        
    )
}
