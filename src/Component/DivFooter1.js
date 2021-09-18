import React from "react";

const DivFooter1 = ({children}) => {
    

    return (
       <>
       <div className='outerdiv1' >
         
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

export default DivFooter1