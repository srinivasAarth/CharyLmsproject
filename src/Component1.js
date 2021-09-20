import React from "react";

import './card.css'
import Card from './Component/Card';
import Cart1 from './Component/Cart1';
import Button from './Component/Button'
import DivFooter from './Component/DivFooter';
import DivFooter1 from './Component/DivFooter1';

const Component1 = () => {
    const [isColor,setIsColor] = React.useState(false)
    const [isColor1,setIsColor1] = React.useState(false)
    const [isColor2,setIsColor2] = React.useState(false)
    const [isColor3,setIsColor3] = React.useState(false)
    
  
    const setFirstbuttonClicked = () => {
      setIsColor((p) => !p)
      setIsColor1(false)
      setIsColor2(false)
      setIsColor3(false)
    }
    const setSecondButtonClicked = () => {
      setIsColor1((p) =>!p)
      setIsColor(false)
      setIsColor2(false)
      setIsColor3(false)
  
    }
   const setthebuttonClicked = () => {
    setIsColor2((p) =>!p)
    setIsColor1(false)
    setIsColor(false)
    setIsColor3(false)
   }
  const setlastbuttonClicked = () => {
    setIsColor3((p) =>!p)
    setIsColor(false)
    setIsColor1(false)
    setIsColor2(false)
  }

    return (
        <>
         <div className='card' style={{fontFamily: 'sans-serif'}} >
    <div className='carddiv'>
    <div className='craddir'>
      <Card
      background='#ffffff'
       heading='STARTER'
       headingColor='#43425d'
        value=' $1' 
        valueColor='#3b86ff'
        valuetitle='Per agent / mo'
        valuetitleColor='#4d4f5c'
        description ='Starter features for
        your business to grow.'
        descriptionColor='#4d4f5c'
        buttonBackground='#3b86ff'
        buttonTextColor='#ffffff'

        />
         <Card
      background='#3b86ff'
       heading='REGULAR'
       headingColor='#ffffff'
        value=' $25' 
        valueColor='#ffffff'
        valuetitle='Per agent / mo'
        valuetitleColor='#ffffff'
        description ='Professional features for
        your business to grow.'
        descriptionColor='#ffffff'
        buttonBackground='#ffffff'
        buttonTextColor='#3b86ff'

        />

    </div>

    <div className='carddiv2'>
      <Cart1  background='#43425d'  >
        <Button className='LabelBG' background='#ff6565'/>
        <DivFooter>
        <div className='productdescription'>
          <div className='beforeprice'>Product description</div>
          <div className='price'>$599</div>
        </div>
        </DivFooter>   
      </Cart1>


      <Cart1 id='box'  background='#43425d'  >
      <div className='labelContent'>
        <span>New</span>
       </div>
      <DivFooter1 >
        <div className='price2'>$678</div>
      </DivFooter1>

      <div className='lastdiv'>
        <div className='firstlastdiv'>
        <button className="Rectangle-740" style={{background:!isColor?'white':'#ff6565',color:!isColor?'black':'white'}}  onClick={setFirstbuttonClicked}>S</button>
       
        <button className="Rectangle-741" style={{background:!isColor1?'white':'#ff6565',color:!isColor1?'black':'white'}} onClick={ setSecondButtonClicked}>M</button>
        <button className="Rectangle-742" style={{background:!isColor2?'white':'#ff6565',color:!isColor2?'black':'white'}} onClick={setthebuttonClicked}>L</button>
        <button className="Rectangle-743" style={{background:!isColor3?'white':'#ff6565',color:!isColor3?'black':'white'}} onClick={setlastbuttonClicked}>XL</button>
        </div>
        <div className='cut'>$754</div>

      </div>
        
      </Cart1>
    </div>
   
   
    </div>

  </div>

        </>
    )
}
export default Component1