import React from "react";


const Cart1 = ({id,background,children}) => {


    return (
        <div id={id } className='firstCartGroup1' style={{background:background}}>
            <>
           {children}
           </>
           
        </div>
    )
}
export default Cart1