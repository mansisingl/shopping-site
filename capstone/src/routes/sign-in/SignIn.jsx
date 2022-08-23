import React from 'react'
import { googleSignInWithPopup } from '../../utils/firebase/Firebase.utils'




const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await googleSignInWithPopup()
        console.log(response);
    }

  return (
    <div>
      <h1>i am sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with popup</button>
    </div>
  )
}

export default SignIn
