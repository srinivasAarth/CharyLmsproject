import React from 'react'

import {AiOutlineArrowRight } from 'react-icons/ai'
import {AiOutlineArrowLeft } from 'react-icons/ai'

export const CustomerFooter = () => {

    const [boottomButtobClicked,setButtomButtonClicked] = React.useState(false)
    const [boottomButtobClickedarrow,setButtomButtonClickedarrow] = React.useState(false)
    const [boottomButtobClicked2,setButtomButtonClicked2] = React.useState(false)
    const [boottomButtobClicked3,setButtomButtonClicked3] = React.useState(false)
    const [boottomButtobClicked4,setButtomButtonClicked4] = React.useState(false)
    const [boottomButtobClicked5,setButtomButtonClicked5] = React.useState(false)
    const [boottomleftClickedarrow,setButtomleftClickedarrow] = React.useState(false)

    
const button1clicked1 =() => {  
    setButtomButtonClicked(true)
    setButtomButtonClickedarrow(false)
    setButtomButtonClicked2(false)
    setButtomButtonClicked3(false)
    setButtomButtonClicked4(false)
    setButtomButtonClicked5(false)
    setButtomleftClickedarrow(false)
}
const button1clickedarrow = () => {
    setButtomButtonClicked(false)
    setButtomButtonClickedarrow(true)
    setButtomButtonClicked2(false)
    setButtomButtonClicked3(false)
    setButtomButtonClicked4(false)
    setButtomButtonClicked5(false)
    setButtomleftClickedarrow(false)
}
const button1clicked2 = () => {
    setButtomButtonClicked(false)
    setButtomButtonClickedarrow(false)
    setButtomButtonClicked2(true)
    setButtomButtonClicked3(false)
    setButtomButtonClicked4(false)
    setButtomButtonClicked5(false)
    setButtomleftClickedarrow(false)
}
const button1clicked3 = () => {
    setButtomButtonClicked(false)
    setButtomButtonClickedarrow(false)
    setButtomButtonClicked2(false)
    setButtomButtonClicked3(true)
    setButtomButtonClicked4(false)
    setButtomButtonClicked5(false)
    setButtomleftClickedarrow(false)
   
}
const button1clicked4 = () => {
    setButtomButtonClicked(false)
    setButtomButtonClickedarrow(false)
    setButtomButtonClicked2(false)
    setButtomButtonClicked3(false)
    setButtomButtonClicked4(true)
    setButtomButtonClicked5(false)
    setButtomleftClickedarrow(false)

}
const button1clicked5 = () => {
    setButtomButtonClicked(false)
    setButtomButtonClickedarrow(false)
    setButtomButtonClicked2(false)
    setButtomButtonClicked3(false)
    setButtomButtonClicked4(false)
    setButtomButtonClicked5(true)
    setButtomleftClickedarrow(false)

}
const button1clicked6 = () => {
    setButtomButtonClicked(false)
    setButtomButtonClickedarrow(false)
    setButtomButtonClicked2(false)
    setButtomButtonClicked3(false)
    setButtomButtonClicked4(false)
    setButtomButtonClicked5(false)
   
    setButtomleftClickedarrow(true)

}
    return (
        <div className='footerbar'>
         <div onClick={button1clickedarrow}   className={boottomButtobClickedarrow?'footerbutton1':'footerbutton'}> <div><AiOutlineArrowLeft /></div></div>
             
             <div onClick={button1clicked1} className={boottomButtobClicked?'footerbutton1':'footerbutton'}>1</div>
             <div onClick={button1clicked2}className={boottomButtobClicked2?'footerbutton1':'footerbutton'}>2</div> 
             <div onClick={button1clicked3}className={boottomButtobClicked3?'footerbutton1':'footerbutton'}>3</div>
             <div onClick={button1clicked4}className={boottomButtobClicked4?'footerbutton1':'footerbutton'}  >4</div>
             <div onClick={button1clicked5}className={boottomButtobClicked5?'footerbutton1':'footerbutton'} >5</div>
             
             <button onClick={button1clicked6}className={boottomleftClickedarrow?'footerbutton1':'footerbutton'}><AiOutlineArrowRight /></button>
         </div>
    )
}
