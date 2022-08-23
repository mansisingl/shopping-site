import { useEffect } from 'react'

import { getRedirectResult,} from 'firebase/auth'

import { 
    googleSignInWithPopup, 
    createUserDocFromAuth, 
    googleSignInWithRedirect,
    auth 
} from '../../utils/firebase/Firebase.utils'
import SignUp from '../../components/sign-up-form/SignUp';


 

const SignIn = () => {

        // useEffect( async () => {
        //    const resp = await getRedirectResult(auth)
        //    if(resp){
        //     const userDocRef = await createUserDocFromAuth(resp.user);
        //    }
        // }, [])

        const fetchData = async () => {
            const response = await getRedirectResult(auth);
        
            if(response){
              const userDocRef = await createUserDocFromAuth(response.user);
            }
            // console.log("sign in with redirect", response);
          };
        
          useEffect(() => { 
            fetchData();
          }, []);

    const logGoogleUser = async () => {
        const {user} = await googleSignInWithPopup()
        const userDocRef = await createUserDocFromAuth(user);
    }

  return (
    <div>
      <h1>i am sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with popup</button>
      <button onClick={googleSignInWithRedirect}>Sign in with redirect</button>
      <SignUp/>
    </div>
  )
}

export default SignIn
