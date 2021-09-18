import React from "react";
import { Checkbox } from 'rsuite';
import TextField from '@material-ui/core/TextField';
import SignupHeading from "./SignupHeading";
import Footer from './Footer'
import './Signup.css'



const Signup = ({setSignUpClicked}) => {

    
     const setSubmit = (e) =>{
         e.preventDefault()

     }


    return (
        <>
        <SignupHeading />
        <Footer /> 
  <form onSubmit={setSubmit} className='form1 '>

            <div className ={"Textfields"}>
                  <TextField className="input-with-icon-textfield1" label="First name" />
                  <TextField className="input-with-icon-textfield1" label="Last name" />
            </div>
            <div className={"Textfields-clmn"} >
            <TextField className="input-with-icon-textfield" label="Username"/>
            <TextField className="input-with-icon-textfield" label="Email"/>
            <TextField className="input-with-icon-textfield" label="Password"/>
            <TextField className="input-with-icon-textfield" label="Confirm Password"/>
            </div>      
            <div>
            <Checkbox className ={"checkii"} >I agree with terms and conditions</Checkbox>
            </div>
            <div className="btn_signup">
            <button type='submit' className ={"signupbtn"} >Signup</button>
            </div>
         
            <div className ={"ardyacut"} onClick={() => setSignUpClicked(false)}>
            Already have an account?Sign in.
            </div>
        
  </form>

    </>
   
       
    )
}

export default Signup