import { Checkbox } from 'rsuite';
import TextField from '@material-ui/core/TextField';
import Footer from './Footer'
import Heading from  './Heading';

function Login({setSignUpClicked}) {
  
    const getSubmit =(e) => {
      e.preventDefault()
    }
  return (
   
   <>
       
      <Heading />
      <Footer />
      <form  onSubmit={getSubmit} className='form'>
     
      
       
        <div className={"Textfields-clmn1"} >
            <TextField className="input-with-icon-textfield2" label="Username"/>
            <TextField className="input-with-icon-textfield2" label=" Password"/>
            </div> 
        
        <div className='password'>
        <Checkbox className ={"checki"} >Remember me</Checkbox>
        <div className='forgetpassword'>Forgot Password</div>
        </div>
        <div className='loginsihnup'>
          <button type='submit' className="example_a">Login</button>
          <button className='ex2' onClick={() => setSignUpClicked(true)}>Signup</button>
        </div>
        
      </form>
      
     

    </>
   
  )
}

export default Login;
