import React, {useEffect, useState} from 'react'
import { auth, 
  googleSignInWithPopup, 
  createUserDocFromAuth, 
  googleSignInWithRedirect,
  signInAuthUserWithEmailAndPassword} from '../../utils/firebase/Firebase.utils';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './SignIn.scss';
import { getRedirectResult } from 'firebase/auth';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {

    const ForSignInWithRedirect = async () => {
        const response = await getRedirectResult(auth);
    
        if(response){
          const userDocRef = await createUserDocFromAuth(response.user);
        }
        // console.log("sign in with redirect", response);
      };
    
      useEffect(() => { 
        ForSignInWithRedirect();
      }, []);

const SignInWithGooglePopup = async () => {
    const {user} = await googleSignInWithPopup()
    await createUserDocFromAuth(user);
}



    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
          const response = await signInAuthUserWithEmailAndPassword(email, password);
          console.log('sign in method' ,response)
            resetFormFields();
        } catch(error) {
          if(error.code === 'auth/user-not-found'){
            alert('user is not registered')
          }else{
            console.log('error in creating the user', error)
          }
          } 
    }


  return ( 
    <div className='sign-in-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput label='email' type='email' required onChange={handleChange} name='email' value={email}  />
        
        <FormInput label='password' type='password' required onChange={handleChange} name='password' value={password} />
        <div className='buttons-container'>
        <Button type='submit'>Sign In</Button>
        <Button buttonType='google' onClick={SignInWithGooglePopup}>popup</Button>
        <Button buttonType='google' onClick={googleSignInWithRedirect}>redirect</Button>
        </div>
        </form>
    </div>
  )
}

export default SignIn;
