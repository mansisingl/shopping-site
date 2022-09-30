import { async } from '@firebase/util';
import React, {useState} from 'react'
import './sign-in-form.styles.scss'
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  //googleSignInWithRedirect,
  //signInWithGoogleRedirect,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/Firebase.utils';
import { getRedirectResult } from 'firebase/auth';
const defaultFormFields = {
     
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    console.log(formFields);

    const resetFormFields =() => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
       //  console.log(response);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // if(password!== confirmPassword){
        //    alert ("password doesnot match");
        //    return; 
        // }

        try{
           const response =await signInAuthUserWithEmailAndPassword(email,password);
           console.log(response);
           resetFormFields();
        }catch(error){
           
        }

    }
     
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
    
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
        <div className='buttons-container'>
        <Button type='submit'>sign in</Button>
        <Button buttonType='google' 
        onClick={signInWithGoogle}>
          popup
          </Button>
          {/* <Button type='button' buttonType='google' onClick={signInWithGoogleRedirect}>redirect</Button> */}

        </div>
 
        
      </form>
    </div>
  )
}

export default SignInForm
