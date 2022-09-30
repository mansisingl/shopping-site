// import { useEffect } from 'react';
 import { getRedirectResult } from 'firebase/auth';
import SignUp from '../../components/sign-up-form/sign-up-form.components';

import React from 'react'
import SignInForm from '../../components/sign-in-form/sign-in-form.components';
import {auth,
   googleSignInWithPopup,
  signInWithGoogleRedirect ,
   createUserDocumentFromAuth
  } from '../../utils/firebase/Firebase.utils'
import { async } from '@firebase/util';
   


 
 const Authentication = () => {
//   const fetchData = async () => {
//     const response = await getRedirectResult(auth);

//     if(response){
//       const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
  
//   };

//   useEffect(() => { 
//     fetchData();
//   }, []);




// useEffect(async () => {
// const response = await getRedirectResult(auth);

// if(response) {
//   const userDocRef = await createUserDocumentFromAuth(response.user);
// }
// console.log(response);
// }, [])





    // const logGoogleUser = async () => {
    //     const {user} = await googleSignInWithPopup();
    //     const userDocRef =await createUserDocumentFromAuth(user);
    //    //  console.log(response);
    // };

  
 
  return (
    <div>
      {/* <h1>i am sign in page</h1> */}
      {/* <button onClick={logGoogleUser}>Sign in with popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with redirect</button> */}
      <SignInForm/>
      <SignUp />

    </div>
  )
}

export default Authentication
