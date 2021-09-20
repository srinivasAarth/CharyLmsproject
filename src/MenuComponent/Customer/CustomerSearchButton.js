import React from 'react'
import {Input,InputGroup,Icon} from 'rsuite';

const CustomerSearchButton = ({filteritem,dataChange,searchvalue}) => {
    return (

            
                <div className='inputSearchBox'>
                <form onSubmit={filteritem}>
                <InputGroup  onChange={dataChange} inside  value={searchvalue}>
                     <InputGroup.Button >
                                    <Icon icon="search" />
                     </InputGroup.Button>
                     <Input  placeholder="Search Name..."  />
                </InputGroup>
                </form> 
                    
                </div>
       
    )
}

export default CustomerSearchButton
