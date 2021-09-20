import React from 'react'





 
import '../Component/ComponentCss/Customer.css'
import { CustomerFooter } from './Customer/CustomerFooter';
import CustomerSearchButton from './Customer/CustomerSearchButton';
import { CustomerCard } from './Customer/CustomerCard';
import { CustomerModel } from './Customer/CustomerModel';

export const Customers = () => {
    const [Darci , setDarci] = React.useState(true)
    const [data,setData] = React.useState(
        [
            {
                id:'0',
                image:'https://cdn.zeplin.io/61407dc892d6142539013dcb/assets/8008DFCF-F93E-47B4-A17F-884D5AECF0DC.png',
                name:'David James',
                state:'United States',
                mobile:'871.567.4877'
            },
            {
                id:'1',
                image:'https://cdn.zeplin.io/61407dc892d6142539013dcb/assets/452D573B-BF22-48C1-8E3B-38C1BC2CAFCF.png',
                name:'Tony Stark',
                state:'United States',
                mobile:'871.567.4877'
            },
            {
                id:'2',
                image:'https://cdn.zeplin.io/61407dc892d6142539013dcb/assets/5C0FB495-331E-407E-A88F-9329408E3F64.png',
                name:'Bessie Berry',
                state:'United States',
                mobile:'871.567.4877'
            },
            {
                id:'3',
                image:'https://cdn.zeplin.io/61407dc892d6142539013dcb/assets/AAC82517-80D4-46B9-B550-8EC26306D951.png',
                name:'Gleb Kuznetsov',
                state:'United States',
                mobile:'871.567.4877'
            },
            {
                id:'4',
                image:'https://cdn.zeplin.io/61407dc892d6142539013dcb/assets/72164914-8634-4BBD-A009-9DA84741C014.png',
                name:'Andrey Prokopenko',
                state:'United States',
                mobile:'871.567.4877'
            },
            {
                id:'5',
                image:'https://cdn.zeplin.io/61407dc892d6142539013dcb/assets/D2E3AF34-6C45-413D-BF84-A1469AF236D1.png',
                name:'Nick Herasimenka',
                state:'United States',
                mobile:'871.567.4877'
            },
            {
                id:'6',
                image:'https://cdn.zeplin.io/61407dc892d6142539013dcb/assets/437E2ECD-20CB-45AD-AB72-609EF8ADAC44.png',
                name:'Valentin Salmon',
                state:'United States',
                mobile:'871.567.4877'
            },
            {
                id:'6',
                image:'https://cdn.zeplin.io/61407dc892d6142539013dcb/assets/6CC5441B-053A-4340-9DAB-1417F53CAF04.png',
                name:'Miro Kirov',
                state:'United States',
                mobile:'871.567.4877'
            }
        ]
    )
  const [editeName,setEditedName] =React.useState('')
    // const { isOpen, open, close } = useModelState();
    const [newArray,setnewArray] = React.useState(data)
    const [isopen,SetisOpen] =React.useState(false)
    const [name,setChangeName]=React.useState('')
    const [searchvalue,setSerachvalue]= React.useState('')

    

   const cancelButtonClick = (el) => {
 const data = newArray.filter(e => e !==el) 
 setData([])
 setnewArray(data)
   }
  
 

   const getedited = (el) =>{
   
    for(let i=0; i<newArray.length;i++){
        if(newArray[i].name===el.name){
           newArray[i].name=name
         
           setnewArray([...newArray]) 
        }
        setDarci(true)
    }
    // onClick={() =>getedited(el)}
console.log('hey')
   }
const openmodel = (el) => {
    setEditedName(el)
    SetisOpen(true)
    setDarci(false)
    
}
const closebutton = () => {
    getedited(editeName)
    SetisOpen(false)
}
const getChange = (el) => {
    setChangeName(el.target.value)
}

const dataChange = (el) => {
setSerachvalue(el.target.value)
}

const filteritem = (e) => {
    e.preventDefault()
  const data=  newArray.filter((el) =>el.name ===searchvalue)
 setnewArray(data)
   
}

    return (
        <div className='customerdiv'>
            <div className='customername'>
                                <div className='customerName'>Customers</div>
                                    <CustomerSearchButton
                                         filteritem={filteritem}
                                         dataChange={dataChange}
                                         value={searchvalue}
                                         
                                    />
             </div>    
         {isopen?<CustomerModel getChange={getChange} value={name} closebutton={closebutton}/>:
         
         <div className='comment'>
             <CustomerCard darci ={Darci}  newArray={newArray} openmodel={openmodel} cancelButtonClick={cancelButtonClick}/>
         </div>
            }

            {!isopen? <CustomerFooter />:null}
           
        
          
        </div>
    )
}
