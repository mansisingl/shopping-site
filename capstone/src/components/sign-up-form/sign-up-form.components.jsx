import { async } from '@firebase/util';
import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/Firebase.utils';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields =() => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password!== confirmPassword){
           alert ("password doesnot match");
           return; 
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
           // console.log(response);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();

        }catch(error){
            if(error.code=== 'auth/email-already-in-use') {
                alert('cannot create user,email already in usee');
            }else{
            console.log("user creation entounter an error",error);
            }
        }

    }
     
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type='text' 
          required 
          onChange={handleChange} 
          name='displayName' 
          value={displayName} 
        />
    
        <FormInput 
          label="email"
          type='email' 
          required 
          onChange={handleChange} 
          name='email' 
          value={email}  
        />
        
        <FormInput 
          label="password"
          type='password' 
          required 
          onChange={handleChange} 
          name='password' 
          value={password}
        />
        
        <FormInput 
         label="confirmPassword"
         type='password' 
         required 
         onChange={handleChange} 
         name='confirmPassword' 
         value={confirmPassword}  
        />

        <button type='submit'>submit form</button>
      </form>
    </div>
  )
}

export default SignUp