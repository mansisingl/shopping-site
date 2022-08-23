import React, {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/Firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type='text' required onChange={handleChange} name='displayName' value={displayName} />
        <label>email</label>
        <input type='email' required onChange={handleChange} name='email' value={email}  />
        <label>password</label>
        <input type='password' required onChange={handleChange} name='password' value={password} />
        <label>confirmPassword</label>
        <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}  />

        <button type='submit'>submit form</button>
      </form>
    </div>
  )
}

export default SignUp
