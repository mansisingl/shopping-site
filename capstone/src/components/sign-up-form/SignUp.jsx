import React, {useState, useContext} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/Firebase.utils';
import FormInput from '../form-input/FormInput';
import './SignUp.scss';
import Button from '../button/Button';
import { UserContext } from '../../context/UserContext';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const {setCurrentUser} = useContext(UserContext);

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
        if(password !== confirmPassword){
            alert('passwords do not match')
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
                );
            setCurrentUser(user);

            await createUserDocFromAuth(user, {displayName})
            resetFormFields();

        } catch(error) {
            if(error.code = 'auth/email-already-in-use'){
                alert('email already in use')
            }else{
                console.log('error in creating the user', error)
            }
        }
    }


  return ( 
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>   
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName} />
        
        <FormInput label='email' type='email' required onChange={handleChange} name='email' value={email}  />
        
        <FormInput label='password' type='password' required onChange={handleChange} name='password' value={password} />
        
        <FormInput label='confirmPassword' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}  />

        <Button type='submit'>submit form</Button>
      </form>
    </div>
  )
}

export default SignUp
