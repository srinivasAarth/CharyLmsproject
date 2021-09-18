import React from "react";

const Card = ({  background,heading,headingColor,value,valueColor,valuetitle,valuetitleColor,description,descriptionColor,buttonBackground,buttonTextColor}) => {

    return(
       <div className='firstCartGroup' style={{backgroundColor:background}}>
           <div className='STARTER' style={{color:headingColor}}>{heading}</div>
           <div className='Pricing ' style={{color:valueColor}}>{value}</div>
           <div className='Per-agent-mo ' style={{color:valuetitleColor}} >{valuetitle}</div>
           <div className='discrption' style={{color:descriptionColor}}>{description}</div>
           <div className='buybuttondiv'>
           <button className='buybutton' style={{backgroundColor:buttonBackground ,color:buttonTextColor}}>BUY</button>
           </div>


       </div>
    )
}

export default Card