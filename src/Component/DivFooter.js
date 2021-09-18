import React from "react";

const DivFooter = ({margintop,children}) => {
    

    return (
       <>
       <div className='outerdiv' >
           <div className='insidediv' >
           <div class="Product-name"> Product name</div>
           <>
            {children}
            </>
           </div>
           
           </div>
       </>
    )

}

export default DivFooter